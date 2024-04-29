import { Router } from 'express'
import { createUserController, getAllUsersController, getUserController, deleteUserController, updateUserController } from '../controllers/users.controllers'
import { ensureAuthMiddleware } from '../middleware/ensureAuth.middleware'
import { ensureIDExistsMiddleware } from '../middleware/ensureIDExists.middleware'
import { ensureIsValidForPatchMiddleware } from '../middleware/ensureIsValidForPatch.middleware'

const usersRoutes = Router()

usersRoutes.post('', createUserController)
usersRoutes.get('', getAllUsersController)
usersRoutes.get('/:id', ensureAuthMiddleware, getUserController)
usersRoutes.delete('/:id', ensureAuthMiddleware, ensureIDExistsMiddleware, deleteUserController)
usersRoutes.patch('/:id', ensureIDExistsMiddleware, ensureAuthMiddleware, ensureIsValidForPatchMiddleware, updateUserController)

export default usersRoutes