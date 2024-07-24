import express from 'express'

// Refactor: Move to db.js
// import mongoose from 'mongoose'

// Refactor: Move this to db.js
// import dotenv from 'dotenv'

// { Entry } means destructure (more efficient) since it was exported as an object in db.js
import { Entry } from './db.js'

// Refactor: Move this to db.js
// dotenv.config()

const categories = ['Food', 'Gaming', 'Coding', 'Other']

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

app.get('/categories', (req, res) => res.send(categories))

// Return to client the entries from db using find() (mongoose methood)
// find() will return all entries
// find() will always return an array of objects even is its 0 found.
// Whereas the findById will return an object
// Add sync and await
app.get('/entries', async (req, res) => res.send(await Entry.find()))

app.get('/entries/:id', async (req, res) => {
    try {
        // const matchingEntries = entries.filter(e => e.id == req.params.id)
        const entry = await Entry.find({ _id: parseInt(req.params.id) }) 
            // parseInt method will do type conversion
            // we cannot specify string parameter in express unlike in flask (eg. /para:string) 
                // (?? review this in recorded video)
                
        // if(matchingEntries.length == 1) {
        if (entry) {
            res.send(matchingEntries[0])
        } else {
            res.status(404).send({error: 'Entry not found'})
        }
    }
    catch {
        res.status(404).send({error: 'message'})
    }
})

app.post('/entries', async (req, res) => {
    try {
        // TODO: Validate the data        
        const newEntry = await Entry.create(req.body) // Create method will create and commit(save) it to db

        // Respond to the client with the new entry and 201 code
        res.status(201).send(newEntry) //Return to client the created instance in db
    }
    catch (err) {
        res.status(400).send({error: err.message})
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




