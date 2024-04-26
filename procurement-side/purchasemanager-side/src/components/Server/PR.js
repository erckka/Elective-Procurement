import express from 'express'
import bodyParser from 'body-parser'
import pgPromise from 'pg-promise'
import cors from 'cors'

const app = express()
const pgp = pgPromise()

// Database configuration for authentication
const db = pgp({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'database',
  database: 'postgres',
})

// Middleware
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  })
)

// Function to format date as string without dashes
function formatDateNoDashes(date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${year}${month}${day}${hours}${minutes}${seconds}`
}

// Define API route to add a purchase
app.post('/api/addPurchase', async (req, res) => {
  try {
    const {
      supplier,
      orderCreated,
      itemName,
      itemDescription,
      quantity,
      status,
    } = req.body

    // Generate purchaseNo as timestamp without dashes
    const purchaseNo = formatDateNoDashes(new Date())

    // Validate required fields
    if (!supplier || !orderCreated || !itemName || !quantity || !status) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Insert the purchase into the database
    await db.none('INSERT INTO purchases VALUES ($1, $2, $3, $4, $5, $6, $7)', [
      purchaseNo,
      supplier,
      orderCreated,
      itemName,
      itemDescription,
      quantity,
      status,
    ])

    res.status(201).json({ message: 'Purchase added successfully', purchaseNo })
  } catch (error) {
    console.error('Error adding purchase:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Start the Express server
const PORT = process.env.PORT || 3001
db.connect()
  .then(() => {
    console.log('Connected to the database')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })
