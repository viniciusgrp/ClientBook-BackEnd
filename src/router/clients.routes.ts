import { Router } from 'express'
import { createClientController, getAllClientsController, getClientController, deleteClientController, updateClientController } from '../controllers/clients.controller'
import { ensureAuthMiddleware } from '../middleware/ensureAuth.middleware'

const clientRoutes = Router()

clientRoutes.post('', ensureAuthMiddleware, createClientController)
clientRoutes.get('', getAllClientsController)
clientRoutes.get('/:id', getClientController)
clientRoutes.delete('/:id', deleteClientController)
clientRoutes.patch('/id/:id', updateClientController)

export default clientRoutes