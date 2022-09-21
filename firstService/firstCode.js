module.exports.CreatePost = (req, res, next) => {
	res.json("first Service post works");
};

module.exports.GetPosts = (req, res, next) => {
	res.json("first Service get works");
};
