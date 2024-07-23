import express from 'express'
import mongoose from 'mongoose' // Import mongoose after installing it by 'npm i mongoose'
import dotenv from 'dotenv'

// Config the dotenv
dotenv.config()

const categories = ['Food', 'Gaming', 'Coding', 'Other']

const entries = [
    { id: 1, category: 'Food', content: 'Pizza is yummy!' },
    { id: 2, category: 'Coding', content: 'Coding is fun!' },
    { id: 3, category: 'Gaming', content: 'War. War never changes.' },
]

// Create a connection to mongoose cloud database
mongoose.connect(process.env.DB_URI) // process and env are objects
    // mongoose.connect is asynchronous (promised-based) before it's connecting to the cloud server
    .then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect')) // m.connection.readyState will return 1 if connected to Mongoose
    .catch(err => console.error(err))

// Create a model
const Entry = mongoose.model('Entry', {
    // Entry variable is singular since it's an instance
    // Inside model method 'Entry' is the collection name, mongoose will automatically convert it to plural name for the collection name
    
    // Create schema
    // category: String,
    category: {type: String, required: true},
    // content: String
    content: {type: String, required: true}
})



const app = express()

// Middleware
app.use(express.json())

app.get('/', (request, response) => response.send({info: 'Journal API!'}))

app.get('/categories', (req, res) => res.send(categories))

app.get('/entries', (req, res) => res.send(entries))

app.get('/entries/:id', (req, res) => {
    const matchingEntries = entries.filter(e => e.id == req.params.id)
    if(matchingEntries.length == 1) {
        res.send(matchingEntries[0])
    } else {
        res.status(404).send({error: 'Entry not found'})
    }
})

// Create a new entry

app.post('/entries', async (req, res) => { //Add async since we are using await
    try {
        // Get the body of the request
        console.log(req.body) 
            // By default Express will not process the incoming request body
            // app.use(express.json())

        // TODO: Validate the data
        // Create a new entry object (to have a correct format before pushing to the array)
        
        // Push the entry to the entry
        // entries.push(req.body)
        const newEntry = await Entry.create(req.body)

        // Respond to the client with the new entry and 201 code
        // res.status(201).send(req.body)
        res.status(201).send(newEntry) //Return to client the created instance in db
    }
    catch (err) {
        res.status(400).send({error: err.message})
    }
})

app.listen(4001, err => { 
// listen() runs a server but does not returns the log in
// Default port is 3000
// Port number 4001 as first parameter in callback function

    if (err) {
        console.error(err)
    } else {
        console.error('Server running')
    }
})




