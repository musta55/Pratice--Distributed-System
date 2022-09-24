axios = require("axios");

module.exports.GetPosts = (req, res, next) => {
	res.json("first Service get works");
};

module.exports.CreatePost2 = (req, res, next) => {
	let newPost = [];
	console.log("dhukse 2nd service");
	console.log(req.body.fn);

	res.status(200).send({
		first_name: req.body.fn,

		post_name: req.body.post_name,
		mesasge: "It works second service",
	});

	// console.log("Post works");
	console.log(req.body);
	// newPost.push(req.body);
	// res(newPost);
};

const servURL = "http://second-service:8081/api/2nd";

module.exports.firstServiceToSecond = async (req, res, next) => {
	let responseFromDifferentService = await axios
		.get(servURL)
		.catch((error) => {
			console.log("error: ", error);
		});
	// await axios.get(servURL)
	//     .then(ress => {
	//         console.log('tt2: ', ress);
	//         responseFromDifferentService = ress;
	//         data.push(responseFromDifferentService);
	//     })
	//     .catch(error => {
	//         console.log(error);
	//     });
	//console.log(responseFromDifferentService.data);
	//data.concat(responseFromDifferentService.data);
	//data = [...data, ...responseFromDifferentService.data];
	//console.log(data);
	res.json(responseFromDifferentService.data);
};
