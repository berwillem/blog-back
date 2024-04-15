const express = require('express')
const router = express.Router()
const postcontroller = require('../controllers/PostControllers')


router.post("/",postcontroller.createPost);
router.get("/",postcontroller.readPost)
router.get("/",postcontroller.readAllPosts)
router.put("/",postcontroller.updatePost)
router.delete("/",postcontroller.deletePost)


module.exports = router;
