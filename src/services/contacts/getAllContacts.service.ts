import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contacts.entity'

export const getAllContactsService = async (): Promise<Contact[]> => {
    const contactsRepository = AppDataSource.getRepository(Contact)

    const allContacts = await contactsRepository.find()
    return allContacts
}