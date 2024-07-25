import express from 'express' //if 'express' has no relative path, it will look for at the node_modules
// console.log(express) // Express is a function

const categories = ['Food', 'Gaming', 'Coding', 'Other']

const entries = [
    { id: 1, category: 'Food', content: 'Pizza is yummy!' },
    { id: 2, category: 'Coding', content: 'Coding is fun!' },
    { id: 3, category: 'Gaming', content: 'War. War never changes.' },
]

const app = express() // Create an instance of express. Calling the express function and store in variable app.
// console.log(app)


// In Python, we use below to run the server:
// if 'name' == 'main':
// app.run(debug=True)


// run 'npm start'
//      npm will look for package.json and scripts.start
//      --watch will keep watching any updates in js script
//      note: if name of script is not 'start' (eg. 'starti'), then run 'npm run starti"


// Middleware philosopy in express
// Routes are considered middlewares
app.use(express.json()) 
    // This middleware will check if incoming request body is valid json
    // If body is json, it will pass the result to the next middleware (e.g., routes)


// Flask:
// @app.route('/'): // <- @ is a decorator
// def home(): // <- handler function
//      return 'Hello'

app.get('/', (request, response) => response.send({info: 'Journal API!'})) // send method on response
// First para: path. 2nd para: callback function
// Callback function has two para request and response

// To change the status code, chain status() method before the send() method
// app.get('/statusCode', (request, response) => response.status(204).send({info: 'Journal API!'}))

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

app.post('/entries', (req, res) => {

    // Get the body of the request
    console.log(req.body) 
        // By default Express will not process the incoming request body
        // app.use(express.json())

    // TODO: Validate the data
    // Create a new entry object (to have a correct format before pushing to the array)
    
    // Push the entry to the entry
    entries.push(req.body)

    // Respond to the client with the new entry and 201 code
    res.status(201).send(req.body)
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




