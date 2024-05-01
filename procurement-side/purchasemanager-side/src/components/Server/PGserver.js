import express from 'express'
import bodyParser from 'body-parser'
import pgPromise from 'pg-promise'
import cors from 'cors'
// import fs from 'fs'
// import csvParser from 'csv-parser'
// import path from 'path'
import nodemailer from 'nodemailer'

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

    app.delete('/api/deleteSupplier/', async (req, res) => {
      try {
        const { supplierId } = req.params

        // Delete the supplier from the database
        await db.none('DELETE FROM supplier WHERE supplierid = $1', supplierId)

        res.status(200).json({ message: 'Supplier deleted successfully' })
      } catch (error) {
        console.error('Error deleting supplier:', error)
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
          'SELECT DISTINCT ON (purchaseno) * FROM purchaserequest WHERE status = $1',
          ['Approved']
        )
        res.json(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    // Define the transporter outside the route handler
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // Use the correct service name
    //   auth: {
    //     user: 'trifecta1611@gmail.com',
    //     pass: 'vpculguarmwostue',
    //   },
    // })

    // app.post('/api/sendEmail', async (req, res) => {
    //   try {
    //     const { purchaseno } = req.body

    //     // Fetch data related to the purchase request
    //     const data = await db.any(
    //       'SELECT DISTINCT ON (purchaseno) * FROM purchaserequest WHERE purchaseno = $1',
    //       purchaseno
    //     )

    //     // Prepare email content
    //     const mailOptions = {
    //       from: 'trifecta1611@gmail.com',
    //       to: 'erickahannah.delacruz@gmail.com', // Change this to the appropriate recipient email address
    //       subject: 'New Purchase Order: [Purchase Request Number]',
    //       text: `Dear Supplier,

    //     We hope this message finds you well.

    //     We are reaching out to inform you that we have initiated a new purchase order with the following details:

    //     Purchase Request Number: [Purchase Request Number]

    //     Items:
    //     - [Item 1]: [Quantity]
    //     - [Item 2]: [Quantity]
    //     - [Item 3]: [Quantity]
    //       ...
    //       (List all items and their respective quantities)

    //     As part of our standard procedure, we kindly request that you provide us with the corresponding invoice detailing the prices for the above items. Please ensure that the invoice includes all relevant information and any applicable taxes or fees.

    //     We appreciate your prompt attention to this matter and look forward to receiving the invoice at your earliest convenience.

    //     If you have any questions or need further clarification, please don't hesitate to contact us.

    //     Thank you for your cooperation.

    //     Sincerely,
    //     [Your Company Name]`,
    //       html: '<p>HTML content</p>', // Add the HTML content
    //     }

    //     // Send email
    //     transporter.sendMail(mailOptions, function (error, info) {
    //       if (error) {
    //         console.error('Error sending email:', error) // Log the error
    //         res.status(500).json({ error: 'Failed to send email' })
    //       } else {
    //         console.log('Email sent: ' + info.response)
    //         res.status(200).json({ message: 'Email sent successfully' })
    //       }
    //     })
    //   } catch (error) {
    //     console.error('Error sending email:', error)
    //     res.status(500).json({ error: 'Internal Server Error' })
    //   }
    // })

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use the correct service name
      host: 'smtp.gmail.com',
      port: 465, // Specify the port number here
      auth: {
        user: 'trifecta1611@gmail.com',
        pass: 'vpculguarmwostue',
      },
    })
    app.post('/api/sendEmail', async (req, res) => {
      try {
        const { purchaseno, suppliername } = req.body

        // Fetch data related to the purchase request
        const data = await db.any(
          'SELECT DISTINCT ON (purchaseno) * FROM purchaserequest WHERE purchaseno = $1',
          purchaseno
        )

        // Fetch item names and quantities associated with the purchase request
        const items = await db.any(
          'SELECT itemname, quantity FROM purchaserequest WHERE purchaseno = $1',
          purchaseno
        )

        // Prepare email content
        let itemsList = ''
        items.forEach((item) => {
          itemsList += `${item.itemname}: ${item.quantity}\n          `
        })

        // Prepare email content
        const mailOptions = {
          from: 'trifecta1611@gmail.com',
          to: 'erickahannah.delacruz@gmail.com', // Change this to the appropriate recipient email address
          subject: 'New Purchase Order: ' + purchaseno,
          html: `
            <p>Dear ${suppliername},</p>
            <p>We hope this message finds you well.</p>
            <p>We are reaching out to inform you that we have initiated a new purchase order with the following details:</p>
            <p>Purchase Request Number: ${purchaseno}</p>
            <p>Items:</p>
            <table border="1">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${items
                  .map(
                    (item) => `
                  <tr>
                    <td>${item.itemname}</td>
                    <td>${item.quantity}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
            <p>As part of our standard procedure, we kindly request that you provide us with the <strong>corresponding invoice detailing the prices for the above items.</strong> Please ensure that the invoice includes all relevant information and any applicable taxes or fees.</p>
            <p>We appreciate your prompt attention to this matter and look forward to receiving the invoice at your earliest convenience.</p>
            <p>If you have any questions or need further clarification, please don't hesitate to contact us.</p>
            <p>Thank you for your cooperation.</p>
            <p>Sincerely,</p>
          `,
        }

        // Send email
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.error('Error sending email:', error) // Log the error
            res.status(500).json({ error: 'Failed to send email' })
          } else {
            console.log('Email sent: ' + info.response)
            res.status(200).json({ message: 'Email sent successfully' })
          }
        })
      } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // Use the correct service name
    //   host: 'smtp.gmail.com',
    //   port: 465, // Specify the port number here
    //   auth: {
    //     user: 'trifecta1611@gmail.com',
    //     pass: 'vpculguarmwostue',
    //   },
    // })
    // app.post('/api/sendEmail', (req, res) => {
    //   const mailOptions = {
    //     from: 'trifecta1611@gmail.com',
    //     to: 'erickahannah.delacruz@gmail.com',
    //     subject: 'Test Email: Hello from Your Company',
    //     text: `Hello,

    //     This is a test email from Your Company. We are testing the email sending functionality.

    //     Thank you.`,
    //     html: '<p>Hello,<br><br>This is a test email from Your Company. We are testing the email sending functionality.<br><br>Thank you.</p>',
    //   }

    //   // Send the email
    //   transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       console.error('Error sending email:', error)
    //       res.status(500).json({ error: 'Failed' })
    //     } else {
    //       console.log('Email sent: ' + info.response)
    //       res.status(200).json({ message: 'Email sent successfully' })
    //     }
    //   })
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

// - [Item 2]: [Quantity]
// - [Item 3]: [Quantity]
//   ...
//   (List all items and their respective quantities)

// text: `Dear Supplier,

//         We hope this message finds you well.

//         We are reaching out to inform you that we have initiated a new purchase order with the following details:

//         Purchase Request Number: ${purchaseno}

//         Items:

//         ${itemsList}

//         As part of our standard procedure, we kindly request that you provide us with the corresponding invoice detailing the prices for the above items. Please ensure that the invoice includes all relevant information and any applicable taxes or fees.

//         We appreciate your prompt attention to this matter and look forward to receiving the invoice at your earliest convenience.

//         If you have any questions or need further clarification, please don't hesitate to contact us.

//         Thank you for your cooperation.

//         Sincerely,
//         `,
//           // html: '<p>HTML content</p>', // Add the HTML content
//         }
