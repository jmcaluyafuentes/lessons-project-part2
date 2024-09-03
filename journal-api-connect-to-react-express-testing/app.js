// Refactored from index.js
import express from 'express'
import { Category } from './db.js'
import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express()

app.use(cors()) 
app.use(express.json())
app.get('/', (request, response) => response.send({info: 'Journal API!'}))
app.get('/categories', async (req, res) => res.send(await Category.find()))
app.use(entryRoutes)

// Add export default and import this to index.js
export default app