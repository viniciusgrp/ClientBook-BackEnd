import { Request, Response } from 'express'
import { IClientRequest, IClientUpdate } from '../interfaces/client.interface'
import { createClientService } from '../services/clients/createClient.service'
import { deleteClientService } from '../services/clients/deleteClientService.service'
import { getAllClientsService } from '../services/clients/getAllClients.service'
import { getClientService } from '../services/clients/getSpecificClient.service'
import { updateClientService } from '../services/clients/updateClient.service'

export const createClientController = async (req: Request, res: Response) => {
    const userData: IClientRequest = req.body

    const createdUser = await createClientService(userData, req.user.id)
    return res.status(201).json(createdUser)
}

export const getAllClientsController = async (req: Request, res: Response) => {
    const allUsers = await getAllClientsService()
    return res.status(200).json(allUsers)
}

export const getClientController = async (req: Request, res: Response) => {
    const allUsers = await getClientService(req.params.id)
    return res.status(200).json(allUsers)
}

export const deleteClientController = async (req: Request, res: Response) => {
    await deleteClientService(req.params.id)
    return res.status(204).send()
}

export const updateClientController = async (req: Request, res: Response) => {
    const dataToUpdate: IClientUpdate = req.body

    const updatedUser = await updateClientService(dataToUpdate, req.params.id)
    return res.status(200).json(updatedUser)
}