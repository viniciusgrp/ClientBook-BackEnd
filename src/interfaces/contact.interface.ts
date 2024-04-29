interface IContactRequest {
    name: string,
    email: string,
    telephone: string,
    linkedin: string,
    client: string
}

interface IContactUpdate {
    name?: string,
    email?: string,
    telephone?: string,
    linkedin?: string,
}

export { IContactRequest, IContactUpdate }