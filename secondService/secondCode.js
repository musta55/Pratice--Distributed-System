module.exports.GetPosts = (req, res, next) => {
	res.json("second Service get works");
};

module.exports.CreatePost = (req, res, next) => {
	let newPost = [];
	console.log("dhukse");
	console.log(req.body.fn);
	res.status(200).send({
		first_name: req.body.fn,
		post_name: req.body.post_name,
	});

	// console.log("Post works");
	console.log(req.body);
	// newPost.push(req.body);
	// res(newPost);
};
