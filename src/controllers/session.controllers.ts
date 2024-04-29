import { Request, Response } from 'express'
import { ISessionRequest } from '../interfaces/session.interface'
import { sessionService } from '../services/sessions/session.service'

export const sessionController = async (req: Request, res: Response) => {
    const userData: ISessionRequest = req.body

    const token = await sessionService(userData)
    return res.status(200).json(token)
}