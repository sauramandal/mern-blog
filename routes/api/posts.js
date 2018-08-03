const express = require('express')
const router = express.Router()

//Post Model
const Post = require('../../models/Post')

// @route GET api/posts
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
})

// @route GET api/posts/:id
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
})

// @route POST api/posts
router.post('/', (req, res) => {
    Post.create(req.body)
        .then(posts => res.json(posts))
    })

//@route UPDATE api/posts/:id
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(posts => res.json(posts))
})

// @route DELETE api/posts/:id
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then(posts => res.json)
})



module.exports = router