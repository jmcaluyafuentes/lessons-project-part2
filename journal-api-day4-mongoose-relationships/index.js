import express from 'express'
import cors from 'cors'

// Refactor: Move to db.js
// import mongoose from 'mongoose'

// Refactor: Move this to db.js
// import dotenv from 'dotenv'

// { Entry } means destructure (more efficient) since it was exported as an object in db.js
import { Entry, Category } from './db.js'

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
app.use(cors())

app.use(express.json())

app.get('/', (request, response) => response.send({info: 'Journal API!'}))

// Get list of categories
// app.get('/categories', (req, res) => res.send(categories))
app.get('/categories', async (req, res) => res.send(await Category.find()))
    // find() mongoose method will return all documents in categories collection because it has no filter.

// Get list of entries
app.get('/entries', async (req, res) => res.send(await Entry.find()))

// Get one entry
app.get('/entries/:id', async (req, res) => {
    try {
        // const matchingEntries = entries.filter(e => e.id == req.params.id)
        // const entry = await Entry.find({ _id: req.params.id }) 
        const entry = await Entry.findById(req.params.id) 
            // '_id' is not just a string but an ObjectId('...') which is a class representation  
        
            // find() method:
                // First parameter is the filter (eg. {name: 'john'})
                // {name: /john/i} means name LIKE john
                // Second parameter is the return which is optional (eg. 'name friends'). Take note there is no comma between the fields name and friends.
                // find() method will always return an array of objects even if the result is 0 found.

            // findById() method:
                // Will return an object

        // if(matchingEntries.length == 1) {
        if (entry) {
            res.send(entry)
        } else {
            res.status(404).send({error: 'Entry not found'})
        }
    }
    catch (err) {
        res.status(404).send({error: err.message})
    }
})

// Create an entry
app.post('/entries', async (req, res) => {
    try {
        // TODO: Validate the data        
        const newEntry = await Entry.create(req.body) // Create() method will create and commit(save) it to db

        // Respond to the client with the new entry and 201 code
        res.status(201).send(newEntry) //Return to client the created instance in db
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

// Update an entry
app.put('/entries/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
            // findByIdAndUpdate will automatically save the updates to db
            // The default behavior of mongoose is to return the unmodified document and not the updated version
            // {returnDocument: 'after'} as the 3rd parameter will return the updated version
            if (entry) {
            res.send(entry)
        } else {
            res.status(400).send({ error: 'Entry not found' })
        }
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

// Delete an entry
app.delete('/entries/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id);
            // findByIdAndUpdate will automatically save the updates to db
            // The default behavior of mongoose is to return the unmodified document and not the updated version
            // {returnDocument: 'after'} as the 3rd parameter will return the updated version
        if (entry) {
            res.sendStatus(200)
            // In delete operation, we don't need to return the entry being deleted
            // But will return the status 200 thru sendStatus() method
        } else {
            res.status(400).send({ error: 'Entry not found' })
        }
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

app.listen(4001, err => { 
// Default port is 3000
    if (err) {
        console.error(err)
    } else {
        console.error('Server running')
    }
})




