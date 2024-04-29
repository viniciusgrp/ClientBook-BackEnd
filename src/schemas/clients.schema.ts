import * as yup from 'yup'

export const createClientSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    linkedin: yup.string().required(),
})

export const updateClientSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    linkedin: yup.string().notRequired(),
})