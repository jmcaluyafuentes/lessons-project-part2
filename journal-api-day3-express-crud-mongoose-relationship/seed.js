import mongoose from 'mongoose'
import { Entry } from './db.js'

const entries = [
    { id: 1, category: 'Food', content: 'Pizza is yummy!' },
    { id: 2, category: 'Coding', content: 'Coding is fun!' },
    { id: 3, category: 'Gaming', content: 'War. War never changes.' },
]

// Ensure there is "db.categories.drop()" in seed.mongodb.js
// drop is mongoDB method
await Entry.deleteMany() // deleteMany is mongoose method
console.log('Deleted Entries')

await Entry.insertMany(entries) // insertMany is mongoose method
console.log('Added Entries')

// This is to disconnect the connection after running 'npm run seed' while server is running.
mongoose.disconnect()