module.exports = function(){

	 this.FriendsList = function(){

	 	//Default Users
	 	var people = [{"name":"James T. Kirk", "img":"/img/man1.jpg", "scores": ["5","5","3","1","2","4","1","3","4","2"]}];

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