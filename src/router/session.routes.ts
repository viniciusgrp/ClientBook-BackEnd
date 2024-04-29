import { Router } from 'express'
import { sessionController } from '../controllers/session.controllers' 

const sessionRoutes = Router()

sessionRoutes.post('', sessionController)

export default sessionRoutes