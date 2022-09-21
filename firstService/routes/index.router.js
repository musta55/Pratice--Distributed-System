const express = require("express");
const router = express.Router();
const app = express();
// const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require("../firstCode");

//Post

//Retrieve first
router.get("/1st", ctrlPost.GetPosts);

// Add Post
router.post("/1st", ctrlPost.CreatePost);

module.exports = router;
