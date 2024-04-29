import 'dotenv/config'
import { compare } from 'bcryptjs'
import User from '../../entities/user.entity'
import { ISessionRequest } from '../../interfaces/session.interface'
import { sessionSerializer } from '../../schemas/session.schemas'
import { AppDataSource } from '../../data-source'
import AppError from '../../errors/AppError'
import jwt from 'jsonwebtoken'

export const sessionService = async (clientData: ISessionRequest): Promise<{ token: string }> => {
    try {

        const clientsRepository = AppDataSource.getRepository(User)

        const client = await clientsRepository.findOneByOrFail({email: clientData.email})

        const clientDataValidated = await sessionSerializer.validate(clientData, {
            abortEarly: false,
            stripUnknown: true
        })

        const passwordMatch = await compare(clientDataValidated.password, client.password)

        if (!passwordMatch) {
            throw new AppError('User invalid', 403)
        }

        const token = await jwt.sign(
            {
                id: `${client.id}`
            },
            process.env.SECRET_KEY!,
            {
                subject: `${client.id}`,
                expiresIn: '24h'
            }
        )

        return { token: token }
    } catch (error) {
        throw new AppError('User invalid', 403)
    }
}