import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobRoutes.js'
dotenv.config()
const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('WELCOME')
})

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API working!' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    console.log('MongoDB connected...')
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

start()
