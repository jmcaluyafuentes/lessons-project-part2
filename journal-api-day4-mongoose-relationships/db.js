import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DB_URI)
    .then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect')) // m.connection.readyState will return 1 if connected to Mongoose
    .catch(err => console.error(err))

const entrySchema = {
    // category: { type: String, required: true },
    content: { type: String, required: true }
}

const Entry = mongoose.model('Entry', {

    // Refactor: abstract this to entrySchema
    // category: { type: String, required: true },
    // content: { type: String, required: true }
})

const Category = mongoose.model('Category', {
    name: { type: String, required: true },

    // Rather than storing the entries indipendently, they will be embedded or nested in categories collection
    // Seed will be created differently because schema is changed
    entries: [entrySchema]
})

// index.js needs to access Entry model
export { Entry, Category }

