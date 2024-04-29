import User from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'

export const getUserService = async (id: string) => {
    const userRepo = AppDataSource.getRepository(User)
    const numId = Number(id)
    const user = userRepo.createQueryBuilder('user')
        .where('user.id = :id', { id: numId })
        .innerJoinAndSelect('user.clients', 'client')
        .getOne()
    
    return user
}