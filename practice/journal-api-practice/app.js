import express from 'express'

const app = express();



const categories = [
    "Gaming",
    "coding",
    "Food",
    "Other"
]

const entries = [
    { id:1, name: 'John', address: 'Melbourne' },
    { id:2 , name: 'Mark', address: 'Victoris' }
]

app.use(express.json())

app.get('/', (req, res) => {
    res.send({info: 'Journal API'})
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/entries', (req, res) => {
    res.send(entries)
});

app.get('/entries/:id', (req, res) => {
    const matchingEntries = entries.filter(e => e.id == req.params.id);
    if (matchingEntries.length == 1) {
        res.send(matchingEntries[0]);
    } else {
        res.status(404).send({error: 'Entry not found'})
    }
})

app.listen(4001, err => {
    if (err) {
        console.log(error);
    } else {
        console.log('Server running');
    }
});