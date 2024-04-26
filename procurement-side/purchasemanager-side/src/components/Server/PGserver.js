import express from 'express'
import bodyParser from 'body-parser'
import pgPromise from 'pg-promise'
import cors from 'cors'
import fs from 'fs'
import csvParser from 'csv-parser'
import path from 'path'

const app = express()
const pgp = pgPromise()

// Database configuration for authentication
const db = pgp({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'password123',
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

    // Define API route to update data (edit)
    // app.post('/api/updateItem', async (req, res) => {
    //   try {
    //     const {
    //       item_id,
    //       item_name,
    //       item_category,
    //       item_description,
    //       unit_price,
    //       retail_price,
    //       reorder_point,
    //       reorder_quantity,
    //       active_status,
    //       action_flag,
    //     } = req.body

    //     // Get the original item from the database
    //     const originalItem = await inventoryDb.oneOrNone(
    //       'SELECT * FROM items WHERE item_id = $1',
    //       item_id
    //     )

    //     // Update only if unit_price has changed
    //     const shouldUpdateUnitPrice = originalItem.unit_price !== unit_price

    //     // Update only if retail_price has changed
    //     const shouldUpdateRetailPrice =
    //       originalItem.retail_price !== retail_price

    //     // Prepare the update query based on whether prices should be updated
    //     let updateQuery
    //     if (shouldUpdateUnitPrice && shouldUpdateRetailPrice) {
    //       updateQuery = `
    //     UPDATE items
    //     SET
    //       item_name = $2,
    //       item_category = $3,
    //       item_description = $4,
    //       unit_price = $5,
    //       retail_price = $6,
    //       unit_price_last_update = CURRENT_DATE,
    //       retail_price_last_update = CURRENT_DATE,
    //       reorder_point = $7,
    //       reorder_quantity = $8,
    //       active_status = $9,
    //       action_flag = $10
    //     WHERE item_id = $1
    //   `
    //     } else if (shouldUpdateUnitPrice) {
    //       updateQuery = `
    //     UPDATE items
    //     SET
    //       item_name = $2,
    //       item_category = $3,
    //       item_description = $4,
    //       unit_price = $5,
    //       unit_price_last_update = CURRENT_DATE,
    //       retail_price = $6,
    //       reorder_point = $7,
    //       reorder_quantity = $8,
    //       active_status = $9,
    //       action_flag = $10
    //     WHERE item_id = $1
    //   `
    //     } else if (shouldUpdateRetailPrice) {
    //       updateQuery = `
    //     UPDATE items
    //     SET
    //       item_name = $2,
    //       item_category = $3,
    //       item_description = $4,
    //       unit_price = $5,
    //       retail_price = $6,
    //       retail_price_last_update = CURRENT_DATE,
    //       reorder_point = $7,
    //       reorder_quantity = $8,
    //       active_status = $9,
    //       action_flag = $10
    //     WHERE item_id = $1
    //   `
    //     } else {
    //       // No price changes, update other fields only
    //       updateQuery = `
    //     UPDATE items
    //     SET
    //       item_name = $2,
    //       item_category = $3,
    //       item_description = $4,
    //       unit_price = $5,
    //       retail_price = $6,
    //       reorder_point = $7,
    //       reorder_quantity = $8,
    //       active_status = $9,
    //       action_flag = $10
    //     WHERE item_id = $1
    //   `
    //     }

    //     await inventoryDb.none(updateQuery, [
    //       item_id,
    //       item_name,
    //       item_category,
    //       item_description,
    //       unit_price,
    //       retail_price,
    //       reorder_point,
    //       reorder_quantity,
    //       active_status,
    //       action_flag,
    //     ])

    //     res.status(200).json({ message: 'Item updated successfully' })
    //   } catch (error) {
    //     console.error('Error updating item:', error)
    //     res.status(500).json({ error: 'Internal Server Error' })
    //   }
    // })

    // Define API route to insert new item (add)
    // app.post('/api/addItem', async (req, res) => {
    //   try {
    //     const {
    //       item_name,
    //       item_category,
    //       item_description,
    //       unit_price,
    //       retail_price,
    //       reorder_point,
    //       reorder_quantity,
    //       active_status,
    //       action_flag,
    //     } = req.body

    //     // Get the current date
    //     const currentDate = new Date()

    //     // Example query to insert data into the 'items' table
    //     const insertQuery = `
    //   INSERT INTO items
    //   (item_name, item_category, item_description, unit_price, retail_price, unit_price_last_update, retail_price_last_update, reorder_point, reorder_quantity, active_status, action_flag)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    // `

    //     await inventoryDb.none(insertQuery, [
    //       item_name,
    //       item_category,
    //       item_description,
    //       unit_price,
    //       retail_price,
    //       currentDate, // unit_price_last_update
    //       currentDate, // retail_price_last_update
    //       reorder_point,
    //       reorder_quantity,
    //       active_status,
    //       action_flag,
    //     ])

    //     res.status(201).json({ message: 'Item inserted successfully' })
    //   } catch (error) {
    //     console.error('Error inserting item:', error)
    //     res.status(500).json({ error: 'Internal Server Error' })
    //   }
    // })

    // Start the Express server
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })