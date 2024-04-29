import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contacts.entity'

export const getContactService = async (id: string): Promise<Contact[]> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const foundContact = await contactRepository.createQueryBuilder('contact')
        .where('contact.clientId = :client_id', { client_id: id })
        .getMany()

    return foundContact
}