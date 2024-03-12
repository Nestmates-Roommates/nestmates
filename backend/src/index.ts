import express, { type Request, type Response } from 'express'

const app = express()
const PORT = 5001

// Routes
app.get('/', (req: Request, res: Response) => {
  console.log("attached")
  res.send('Heell021323o Wrld!')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is runwg on http://localhost:${PORT}`)
})

