import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5500

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
