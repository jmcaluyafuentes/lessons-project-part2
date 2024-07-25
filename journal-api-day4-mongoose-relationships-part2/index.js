import express from 'express'

// Refactor: Move to db.js
// import mongoose from 'mongoose'

// Refactor: Move this to db.js
// import dotenv from 'dotenv'

// { Entry } means destructure (more efficient) since it was exported as an object in db.js
import { Category } from './db.js'

import entryRoutes from './routes/entry_routes.js'
    // Because router from entry_route.js is default export, cury braces are not needed in the import
    // entryRoutes name is arbitrary

// Refactor: Move this to db.js
// dotenv.config()

// Refactor: Move this to db.js
// const categories = ['Food', 'Gaming', 'Coding', 'Other']

// Refactor: Move to seed.js

// const entries = [
//     { id: 1, category: 'Food', content: 'Pizza is yummy!' },
//     { id: 2, category: 'Coding', content: 'Coding is fun!' },
//     { id: 3, category: 'Gaming', content: 'War. War never changes.' },
// ]

// Refactor: Move db and schema setup in db.js

// mongoose.connect(process.env.DB_URI)
//     .then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect')) // m.connection.readyState will return 1 if connected to Mongoose
//     .catch(err => console.error(err))

// const Entry = mongoose.model('Entry', {
//     category: {type: String, required: true},
//     content: {type: String, required: true}
// })

const app = express()

app.use(express.json())

app.get('/', (request, response) => response.send({info: 'Journal API!'}))

// TODO: Move /categories route to a routes module
// TODO: Complete categories CRUD
// TODO: ADVANCED: Add a route GET /categories/:cat_id/entries that returns all entries in a given category


// Get list of categories
app.get('/categories', async (req, res) => res.send(await Category.find()))

// entryRoutes is a middleware
// Attach it using use() method
// Take note location, it is between the app.user(express.json()) and app.listen
app.use(entryRoutes)

// Refactor: Modularise by moving it to routes folder

// // Get list of entries
// app.get('/entries', async (req, res) => res.send(await Entry.find().populate('category')))
//     // Use populate method to return the category object
//     // Review the recorded lesson

// // Get one entry
// app.get('/entries/:id', async (req, res) => {
//     try {
//         const entry = await Entry.findById(req.params.id).populate('category') 

//         if (entry) {
//             res.send(entry)
//         } else {
//             res.status(404).send({error: 'Entry not found'})
//         }
//     }
//     catch (err) {
//         res.status(404).send({error: err.message})
//     }
// })

// // Create an entry
// app.post('/entries', async (req, res) => {
//     try {
//         // TODO: Validate the data        
//         const newEntry = await Entry.create(req.body)

//         res.status(201).send(newEntry)
//     }
//     catch (err) {
//         res.status(400).send({ error: err.message })
//     }
// })

// // Update an entry
// app.put('/entries/:id', async (req, res) => {
//     try {
//         const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}).populate('category');
//             if (entry) {
//             res.send(entry)
//         } else {
//             res.status(400).send({ error: 'Entry not found' })
//         }
//     }
//     catch (err) {
//         res.status(404).send({ error: err.message })
//     }
// })

// // Delete an entry
// app.delete('/entries/:id', async (req, res) => {
//     try {
//         const entry = await Entry.findByIdAndDelete(req.params.id);
//             // findByIdAndUpdate will automatically save the updates to db
//             // The default behavior of mongoose is to return the unmodified document and not the updated version
//             // {returnDocument: 'after'} as the 3rd parameter will return the updated version
//         if (entry) {
//             res.sendStatus(200)
//             // In delete operation, we don't need to return the entry being deleted
//             // But will return the status 200 thru sendStatus() method
//         } else {
//             res.status(400).send({ error: 'Entry not found' })
//         }
//     }
//     catch (err) {
//         res.status(404).send({ error: err.message })
//     }
// })

app.listen(4001, err => { 
// Default port is 3000
    if (err) {
        console.error(err)
    } else {
        console.error('Server running')
    }
})




