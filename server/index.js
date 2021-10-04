const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)

const app = express()

app.get('/products', function(req, res) {
   res.json({'sucess': true}) 
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})