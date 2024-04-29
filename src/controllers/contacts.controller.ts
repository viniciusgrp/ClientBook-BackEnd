import { updateContactService } from './../services/contacts/updateContact.service';
import { Request, Response } from 'express'
import { IContactRequest, IContactUpdate } from '../interfaces/contact.interface'
import { createContactService } from '../services/contacts/createContact.service'
import { deleteContactService } from '../services/contacts/deleteContactService.service'
import { getAllContactsService } from '../services/contacts/getAllContacts.service'
import { getContactService } from '../services/contacts/getSpecificContact.service'

export const createContactController = async (req: Request, res: Response) => {
    const contactData: IContactRequest = req.body

    const createdContact = await createContactService(contactData, req.params.id)
    return res.status(201).json(createdContact)
}

export const getAllContactsController = async (req: Request, res: Response) => {
    const allUsers = await getAllContactsService()
    return res.status(200).json(allUsers)
}

export const getContactController = async (req: Request, res: Response) => {
    const contact = await getContactService(req.params.id)
    return res.status(200).json(contact)
}

export const deleteContactController = async (req: Request, res: Response) => {
    await deleteContactService(req.params.id)
    return res.status(204).send()
}

export const updateContactController = async (req: Request, res: Response) => {
    const dataToUpdate: IContactUpdate = req.body

    const foundClient = res.locals.foundClient

    const updatedClient = await updateContactService(dataToUpdate, foundClient, req.params.id)
    return res.status(200).json(updatedClient)
}