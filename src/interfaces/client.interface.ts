interface IClientRequest {
    name: string,
    email: string,
    telephone: string,
    linkedin: string,
}

interface IClientUpdate {
    name?: string,
    email?: string,
    telephone?: string,
    linkedin?: string,
}

export { IClientRequest, IClientUpdate }