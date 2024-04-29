import Client from '../../entities/clients.entity'
import { IClientUpdate } from '../../interfaces/client.interface' 
import AppError from '../../errors/AppError'
import {AppDataSource} from '../../data-source'
import { updateClientSerializer } from '../../schemas/clients.schema'

export const updateClientService = async (dataToUpdate: IClientUpdate, id: string) => {
    try {
        const validatedDataToUpdate = await updateClientSerializer.validate(dataToUpdate, {
            abortEarly: false,
            stripUnknown: true
        })

        const numId = Number(id)

        const clientRepository = AppDataSource.getRepository(Client)

        const foundUser = await clientRepository.findOneByOrFail({id: numId})

        console.log("ID", numId, "CLIENTE", foundUser)

        await clientRepository.update(id, {
            email: validatedDataToUpdate.email || foundUser.email,
            name: validatedDataToUpdate.name || foundUser.name,
            telephone: validatedDataToUpdate.telephone || foundUser.telephone,
            linkedin: validatedDataToUpdate.linkedin || foundUser.linkedin,
        })

        const updatedUser = await clientRepository.findOneBy({
            id: numId
        })

        return updatedUser
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}