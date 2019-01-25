const express = require('express')
const massive = require('massive')
const { json } = require('body-parser')
const ic = require('./controller')
require('dotenv').config()

const app = express()
app.use(json())

massive(process.env.CONNECTION_STRING)
    .then((db) => {
        console.log('Connected to the database')
        app.set('db', db)
    })
    .catch((err) => console.log(err))

app.get('/api/inventory', ic.getInventory)
app.get('/api/inventory/:id', ic.getItem)
app.post('/api/inventory', ic.createProduct)
app.delete('/api/inventory/:id', ic.deleteProduct)
app.put('/api/inventory/:id', ic.editProduct)

const port = 3001 || process.env.PORT
app.listen(port, console.log(`Listening on port ${port}...`))
