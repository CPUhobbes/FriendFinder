module.exports = function(app) { 


var people = [{"name":"James T. Kirk", "img":"/img/man1.jpg", "scores": ["5","5","3","1","2","4","1","3","4","2"]}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

	app.get('/api/friends', function (req, res) {
		res.json(people);
	});
	app.post('/api/friends', function (req, res) {
		var newPerson = req.body;
		people.push(newPerson);
		res.send(newPerson);
	});

	//BEST FRIEND LOGIC TODO
	//var bestFriend = {}; 


	//res.json(bestFriend); //return profile of best friend

}