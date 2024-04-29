import { Request, Response, NextFunction } from 'express'
import Client from '../entities/clients.entity'
import {AppDataSource} from '../data-source'
import AppError from '../errors/AppError'

export const ensureIDExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const clientRepository = AppDataSource.getRepository(Client)

    const numberId = Number(req.params.id)

    const foundClient = await clientRepository.findOneBy({
        id: numberId
    })

    if (!foundClient) {
        throw new AppError('User invalid', 404)
    }  
    
    res.locals.foundClient = foundClient
    
    return next()
}