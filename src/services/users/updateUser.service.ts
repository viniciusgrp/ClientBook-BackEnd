import User from '../../entities/user.entity'
import { IUserUpdate } from '../../interfaces/user.interface'
import AppError from '../../errors/AppError'
import {AppDataSource} from '../../data-source'
import { updateUserSerializer } from '../../schemas/user.schemas'

export const updateUserService = async (dataToUpdate: IUserUpdate, foundUser: User, reqID: string) => {
    try {
        const validatedDataToUpdate = await updateUserSerializer.validate(dataToUpdate, {
            abortEarly: false,
            stripUnknown: true
        })

        const usersRepository = AppDataSource.getRepository(User)

        await usersRepository.update(reqID, {
            email: validatedDataToUpdate.email || foundUser.email,
            password: validatedDataToUpdate.password || foundUser.password
        })

        const numberId = Number(reqID)

        const updatedUser = await usersRepository.findOneBy({
            id: numberId
        })

        return updatedUser
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}