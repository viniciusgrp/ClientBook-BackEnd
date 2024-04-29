import { AppDataSource } from '../../data-source'
import Client from '../../entities/clients.entity'

export const getClientService = async (id: string): Promise<Client[]> => {
    const clientsRepository = AppDataSource.getRepository(Client)

    const foundClient = await clientsRepository.createQueryBuilder("client")
        .where("client.userId = :user_id", { user_id: id })
        .getMany()

    return foundClient
}