const express = require("express");
const router = express.Router();
const app = express();
// const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require("../firstCode");

//Post

//Retrieve first

router.get("/1st", ctrlPost.GetPosts);

router.post("/1st", ctrlPost.CreatePost2);

router.get("/1sttosecond", ctrlPost.firstServiceToSecond);

module.exports = router;
