const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    category: {
        type: string,
        required: true
    },
    post: {
        type: string,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema)