// Data js file
// =============================================================

module.exports = function(){

	 this.FriendsList = function(){

	 	//Default Users
	 	var people = [{"name":"James T. Kirk", "img":"/img/man1.jpg", "scores": ["5","5","3","1","2","4","1","3","4","2"]},
	 					{"name":"Don Draper", "img":"/img/man2.jpg", "scores": ["2","4","1","3","4","1","5","5","2","3"]},
	 					{"name":"Sherlock Holmes", "img":"/img/man3.jpg", "scores": ["3","1","2","5","2","2","5","1","2","5"]},
	 					{"name":"Elle Woods", "img":"/img/woman1.jpg", "scores": ["5","2","4","3","2","4","3","1","2","4"]},
	 					{"name":"Jules Robinson", "img":"/img/woman2.jpg", "scores": ["1","2","4","3","4","1","3","3","2","2"]},
	 					{"name":"Selene Blackwood", "img":"/img/woman3.jpg", "scores": ["3","2","2","5","4","5","3","3","5","5"]}];

	 	//Store friend into array
	 	this.storeFriend = function (friend){
	 		people.push(friend);
	 	}

	 	//Return array of friends
	 	this.getFriends = function(){
	 		return people;
	 	}

	 }

}