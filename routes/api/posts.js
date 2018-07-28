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
    console.log(req.body);
    
    const newPost = new Post({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description
    })

    newPost.save()
        .then(post => res.json(post))
})
// @route DELETE api/posts/:id
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})



module.exports = router