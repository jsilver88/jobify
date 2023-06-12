import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobRoutes.js'
dotenv.config()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5500

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
