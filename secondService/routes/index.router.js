const express = require("express");
const router = express.Router();
// const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require("../secondCode");

//Post

//Retrieve first
router.get("/2nd", ctrlPost.GetPosts);


router.post("/2nd", ctrlPost.CreatePost);

module.exports = router;
