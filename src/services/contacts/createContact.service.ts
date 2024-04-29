import { AppDataSource } from "../../data-source";
import Client from "../../entities/clients.entity";
import Contact from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contact.interface";
import { createContactSerializer } from "../../schemas/contact.schema";

export const createContactService = async (
  userData: IContactRequest,
  userId: string
): Promise<Contact> => {
  try {
    const contactDataValidated = await createContactSerializer.validate(
      userData,
      {
        stripUnknown: true,
        abortEarly: false,
      }
    );

    const clientRepository = AppDataSource.getRepository(Client);
    const numberId = Number(userId);
    const client = await clientRepository.findOneByOrFail({ id: numberId });

    const contact = { ...contactDataValidated, clientId: userId };
    const contactRepository = AppDataSource.getRepository(Contact);
    const createdContact = contactRepository.create({...contact, client:client});
    console.log(contact)
    await contactRepository.save(createdContact);

    return createdContact;
  } catch (error: any) {
    throw new AppError(error, 400);
  }
};
