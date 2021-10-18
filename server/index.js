const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRoutes = require('../server/routes/product')
const userRoutes = require('../server/routes/user')
const path = require('path')

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)

const app = express()
app.use(bodyParser.json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)


const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('I am running!')
})