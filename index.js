const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const db = require('./config/keys').mongoURI

const app = express()

//bodyparser middleware
app.use(bodyParser.json())

mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server Started On Port ${port}`))