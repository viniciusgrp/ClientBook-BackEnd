import { Request, Response, NextFunction } from 'express'
import AppError from '../errors/AppError'

export const ensureIsValidForPatchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const id = req.user.id
    const reqID = req.params.id

    if (id === reqID) {
        return next()
    } else {
        throw new AppError('User not authorized.', 403)
    }
}