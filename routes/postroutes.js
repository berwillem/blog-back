const express = require("express");
const router = express.Router();
const postcontroller = require("../controllers/PostControllers");

router.post("/", postcontroller.createPost);
router.get("/", postcontroller.readAllPosts);
router.get("/:id", postcontroller.readpostbyid);
router.put("/:id", postcontroller.updatePost);
router.put("/like/:id", postcontroller.likePost);
router.delete("/:id", postcontroller.deletePost);

module.exports = router;
