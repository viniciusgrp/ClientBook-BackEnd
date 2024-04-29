import { Router } from 'express'
import { createContactController, deleteContactController, getAllContactsController, getContactController, updateContactController } from '../controllers/contacts.controller'
import { ensureAuthMiddleware } from '../middleware/ensureAuth.middleware'
import { ensureIDExistsMiddleware } from '../middleware/ensureIDExists.middleware'
import { ensureIsValidForPatchMiddleware } from '../middleware/ensureIsValidForPatch.middleware'

const contactRoutes = Router()

contactRoutes.post('/:id', ensureAuthMiddleware, createContactController)
contactRoutes.get('', getAllContactsController)
contactRoutes.get('/:id', getContactController)
contactRoutes.delete('/:id', ensureAuthMiddleware, deleteContactController)
contactRoutes.patch('/:id', ensureAuthMiddleware, updateContactController)

export default contactRoutes