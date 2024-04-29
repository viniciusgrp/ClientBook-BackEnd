interface IUserRequest {
    name: string,
    email: string,
    password: string,
}

interface IUserUpdate {
    email?: string,
    password?: string,
}

export { IUserRequest, IUserUpdate }