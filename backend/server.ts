import express, { type Request, type Response } from 'express'

const app = express()
const PORT = 5000

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
