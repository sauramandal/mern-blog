const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const posts = require('./routes/api/posts')



const app = express()

//bodyparser middleware
app.use(bodyParser.json())

//database config
const db = require('./config/keys').mongoURI

//database connect
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))




app.use('/api/posts', posts)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server Started On Port ${port}`))