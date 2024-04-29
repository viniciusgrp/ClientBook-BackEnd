import * as yup from 'yup'

export const createContactSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    linkedin: yup.string().required(),
})

export const updateContactSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    linkedin: yup.string().notRequired(),
})