import app from './app.js'

// Refactor: Move the code to app.js
// import express from 'express'
// import { Category } from './db.js'
// import entryRoutes from './routes/entry_routes.js'
// import cors from 'cors'

// const app = express()

// app.use(cors()) 
// app.use(express.json())
// app.get('/', (request, response) => response.send({info: 'Journal API!'}))
// app.get('/categories', async (req, res) => res.send(await Category.find()))
// app.use(entryRoutes)

app.listen(4001, err => { 
// Default port is 3000
    if (err) {
        console.error(err)
    } else {
        console.error('Server running')
    }
})




