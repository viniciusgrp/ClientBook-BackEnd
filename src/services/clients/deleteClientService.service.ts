import {AppDataSource} from '../../data-source'
import Client from '../../entities/clients.entity'

export const deleteClientService = async (id: string): Promise<void> => {
    const clientRepository = AppDataSource.getRepository(Client)
    
    const numberId = Number(id)

    const user = await clientRepository.findOneByOrFail({id: numberId})

    await clientRepository.delete(user.id)

    return
}