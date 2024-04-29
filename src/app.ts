import 'reflect-metadata'
import 'express-async-errors'
import express, { Request, Response } from 'express'
import handleError from './errors/handleError'
import clientRoutes from './router/clients.routes'
import sessionRoutes from './router/session.routes'
import contactRoutes from './router/contact.routes'
import usersRoutes from './router/users.routes'

const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/contacts', contactRoutes)
app.use('/login', sessionRoutes)
app.use('/users', usersRoutes)

app.use(handleError)
app.use(express.static('documentation'))
app.use('./', (req:Request, res: Response) => {
    res.render('index.html')
})

export default app