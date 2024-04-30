import express from 'express'
import bodyParser from 'body-parser'
import pgPromise from 'pg-promise'
import cors from 'cors'
// import fs from 'fs'
// import csvParser from 'csv-parser'
// import path from 'path'

const app = express()
const pgp = pgPromise()

// Database configuration for authentication
const db = pgp({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'password123',
  // password: 'database',
  database: 'postgres',
})

// Middleware
app.use(bodyParser.json())

// Use cors middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your React app's origin
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  })
)

// Check database connection
db.connect()
  .then(() => {
    console.log('Connected to the database')

    // Define API route to fetch data
    app.get('/api/data', async (req, res) => {
      try {
        // Example query to fetch data from a PostgreSQL table
        const data = await db.any('SELECT * FROM supplier ORDER BY supplierid')
        res.json(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.post('/api/updateSupplier', async (req, res) => {
      try {
        const {
          supplierid,
          suppliername,
          contactphone,
          suppliercontact,
          companyemail,
          street,
          city,
          state,
          zipcode,
          country,
        } = req.body

        // Get the original supplier from the database
        const originalSupplier = await db.oneOrNone(
          'SELECT * FROM supplier WHERE supplierid = $1',
          supplierid
        )

        // Update only if any of the fields have changed
        const shouldUpdate =
          originalSupplier.suppliername !== suppliername ||
          originalSupplier.contactphone !== contactphone ||
          originalSupplier.suppliercontact !== suppliercontact ||
          originalSupplier.companyemail !== companyemail ||
          originalSupplier.street !== street ||
          originalSupplier.city !== city ||
          originalSupplier.state !== state ||
          originalSupplier.zipcode !== zipcode ||
          originalSupplier.country !== country

        if (!shouldUpdate) {
          return res.status(200).json({ message: 'Supplier data unchanged' })
        }

        // Prepare the update query
        const updateQuery = `
          UPDATE supplier
          SET 
            suppliername = $2,
            contactphone = $3,
            suppliercontact = $4,
            companyemail = $5,
            street = $6,
            city = $7,
            state = $8,
            zipcode = $9,
            country = $10
          WHERE supplierid = $1
        `

        // Execute the update query
        await db.none(updateQuery, [
          supplierid,
          suppliername,
          contactphone,
          suppliercontact,
          companyemail,
          street,
          city,
          state,
          zipcode,
          country,
        ])

        res.status(200).json({ message: 'Supplier updated successfully' })
      } catch (error) {
        console.error('Error updating supplier:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.post('/api/addSupplier', async (req, res) => {
      try {
        const {
          suppliername,
          contactphone,
          suppliercontact,
          companyemail,
          street,
          city,
          state,
          zipcode,
          country,
        } = req.body

        // Get the current date
        const currentDate = new Date()

        // Example query to insert data into the 'items' table
        const insertQuery = `
        INSERT INTO supplier 
        (suppliername, contactphone, suppliercontact, companyemail, street, city, state, zipcode, country)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `

        await db.none(insertQuery, [
          suppliername,
          contactphone,
          suppliercontact,
          companyemail,
          street,
          city,
          state,
          zipcode,
          country,
        ])

        res.status(201).json({ message: 'Item inserted successfully' })
      } catch (error) {
        console.error('Error inserting item:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.post('/api/addPR', async (req, res) => {
      try {
        const { id, suppliername, companyemail, targetDeliveryDate, items } =
          req.body

        // Get the current date
        const currentDate = new Date()

        // Example query to insert data into the 'items' table
        const insertQuery = `
        INSERT INTO purchaserequest 
        (purchaseno, suppliername, targetdeliverydate, ordercreated, itemname, itemdesc, quantity, status, companyemail)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `

        // Iterate over items and insert each item into the database
        for (const item of items) {
          await db.none(insertQuery, [
            id,
            suppliername,
            targetDeliveryDate,
            currentDate,
            item.item,
            item.itemDescription,
            item.quantity,
            'Pending',
            companyemail,
          ])
        }

        res.status(201).json({ message: 'Inserted successfully' })
      } catch (error) {
        console.error('Error inserting item:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.get('/api/dataPR', async (req, res) => {
      try {
        // Example query to fetch data from a PostgreSQL table
        const data = await db.any(
          'SELECT DISTINCT ON (purchaseno) * FROM purchaserequest WHERE status = $1',
          ['Pending']
        )
        res.json(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.get('/api/items/:purchaseno', async (req, res) => {
      try {
        const { purchaseno } = req.params
        // Example query to fetch item data associated with a specific purchaseno
        const itemsData = await db.any(
          'SELECT * FROM purchaserequest WHERE purchaseno = $1',
          [purchaseno]
        )
        res.json(itemsData)
      } catch (error) {
        console.error(`Error fetching item data for purchaseno`, error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.post('/api/approvedStatus', async (req, res) => {
      try {
        const { purchaseno } = req.body

        // Prepare the update query to set the status to 'Approved'
        const updateQuery = `
          UPDATE purchaserequest
          SET status = 'Approved'
          WHERE purchaseno = $1
        `

        // Execute the update query
        await db.none(updateQuery, [purchaseno])

        res
          .status(200)
          .json({ message: 'Status updated to Approved successfully' })
      } catch (error) {
        console.error('Error updating status:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.post('/api/rejectedStatus', async (req, res) => {
      try {
        const { purchaseno } = req.body

        // Prepare the update query to set the status to 'Approved'
        const updateQuery = `
          UPDATE purchaserequest
          SET status = 'Rejected'
          WHERE purchaseno = $1
        `

        // Execute the update query
        await db.none(updateQuery, [purchaseno])

        res
          .status(200)
          .json({ message: 'Status updated to Rejected successfully' })
      } catch (error) {
        console.error('Error updating status:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    app.get('/api/dataProductStatus', async (req, res) => {
      try {
        // Example query to fetch data from a PostgreSQL table
        const data = await db.any(
          'SELECT DISTINCT ON (purchaseno) * FROM purchaserequest'
        )
        res.json(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    // Start the Express server
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })
