import express from 'express'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'
import ProjectRouter from './routes/project.route'
import { corsConfig } from './config/cors'
import swaggerUI from 'swagger-ui-express'
import specs from './config/swagger'


async function connectDB() {
    try {
        await db.authenticate()
        //await db.getQueryInterface().dropTable('projects');
        //db.sync()
        await db.sync({ alter: true });
        console.log(colors.blue.bold('Conexión a postgresql establecida'))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Conexión fallida a postgresql establecida'))
    }
}
connectDB()

const app = express()

app.use(cors(corsConfig))
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/api/projects', ProjectRouter)

export default app