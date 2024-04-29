import * as yup from 'yup'

export const createUserSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
})

export const updateUserSerializer = yup.object().shape({
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired()
})