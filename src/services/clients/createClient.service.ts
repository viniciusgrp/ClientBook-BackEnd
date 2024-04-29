import { createClientSerializer } from '../../schemas/clients.schema';
import { AppDataSource } from '../../data-source'
import Client from '../../entities/clients.entity'
import AppError from '../../errors/AppError'
import { IClientRequest } from '../../interfaces/client.interface';
import User from '../../entities/user.entity';


export const createClientService = async (userData: IClientRequest, userId: string): Promise<Client> => {
    try {
        const clientDataValidated = await createClientSerializer.validate(userData, {
            stripUnknown: true,
            abortEarly: false
        })

        const userRepo = AppDataSource.getRepository(User)
        const numId = Number(userId)
        const user = await userRepo.findOneByOrFail({id: numId})

        const clientsRepository = AppDataSource.getRepository(Client)
        const createdClient = clientsRepository.create({...clientDataValidated, user})
        await clientsRepository.save(createdClient)

        return createdClient
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}