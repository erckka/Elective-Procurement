/*const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.post('/api/suppliers', async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      contactNumber,
      companyEmail,
      address,
      city,
      state,
      zipCode,
      country,
    } = req.body

    const client = await pool.connect()
    const result = await client.query(
      'INSERT INTO suppliers (company_name, contact_person, contact_number, company_email, address, city, state, zip_code, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        companyName,
        contactPerson,
        contactNumber,
        companyEmail,
        address,
        city,
        state,
        zipCode,
        country,
      ]
    )
    client.release()

    res.status(201).send('Supplier added successfully')
  } catch (err) {
    console.error('Error adding supplier', err)
    res.status(500).send('Error adding supplier')
  }
})

app.listen(4000, () => console.log('server on localhost:4000'))*/

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'database',
  port: 5432, // Default PostgreSQL port
})

pool
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL')
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL', error)
  })
