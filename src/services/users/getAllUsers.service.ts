import {AppDataSource} from '../../data-source'
import User from '../../entities/user.entity'

export const getAllUsersService = async (): Promise<User[]> => {
    const usersRepository = AppDataSource.getRepository(User)

    const allUsers = await usersRepository.find()
    return allUsers
}