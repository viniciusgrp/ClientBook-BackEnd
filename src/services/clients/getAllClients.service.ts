import { AppDataSource } from '../../data-source'
import Client from '../../entities/clients.entity'

export const getAllClientsService = async (): Promise<Client[]> => {
    const clientsRepository = AppDataSource.getRepository(Client)

    const allClients = await clientsRepository.find()
    return allClients
}