const express = require("express");
const router = express.Router();
const app = express();
// const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require("../firstCode");

//Post

//Retrieve first
router.get("/1st", ctrlPost.GetPosts);


module.exports = router;
