
const express = require('express')
const router = express.Router()
const blogController = require("../controllers/blog.js")

router.get('/all',blogController.retrieve)
router.get('/:title',blogController.retrieveOne)
router.post('/add',blogController.createOne)
router.delete('/:id',blogController.deleteOne)
router.put('/:id',blogController.updateOne)
module.exports=router
