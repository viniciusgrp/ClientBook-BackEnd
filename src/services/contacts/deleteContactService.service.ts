import {AppDataSource} from '../../data-source'
import Contact from '../../entities/contacts.entity'

export const deleteContactService = async (id: string): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    
    const numberId = Number(id)

    const user = await contactRepository.findOneByOrFail({id: numberId})

    await contactRepository.delete(user.id)
}