import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

// Refactor: To eliminate the error promted in test
try {
    const m = await mongoose.connect(process.env.DB_URI)
    console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect')
}
catch (err) {
    console.error(err)
}

// Refactor: To eliminate the error promted in test
// mongoose.connect(process.env.DB_URI)
//     .then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect')) // m.connection.readyState will return 1 if connected to Mongoose
//     .catch(err => console.error(err))


const entrySchema = {
    category: { type: mongoose.ObjectId, ref: 'Category', required: true },
    content: { type: String, required: true }
}

const Entry = mongoose.model('Entry', entrySchema)

const Category = mongoose.model('Category', {
    name: { type: String, required: true },
})

export { Entry, Category }

