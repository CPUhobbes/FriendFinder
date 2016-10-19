//get results
function validate(){
	var answers = $(".dropdown-menu li a");
	answers.each(function(value, index){
		console.log($(this).find('option:selected').context.innerHTML);
	});
	//console.log(answers);



}


//Create questions for form
function createForm(){

	//Array of questions
	var questionBank=["Your mind is always buzzing with unexplored ideas and plans.",
						"Generally speaking, you rely more on your experience than your imagination.",
						"You find it easy to stay relaxed and focused even when there is some pressure.",
						"You rarely do something just out of sheer curiosity.",
						"People can rarely upset you.",
						"It is often difficult for you to relate to other people's feelings.",
						"In a discussion, truth should be more important than people's sensitivities.",
						"You rarely get carried away by fantasies and ideas.",
						"You think that everyone's views should be respected regardless of whether they are supported by facts or not.",
						"You feel more energetic after spending time with a group of people."
						];
	//Array of answers					
	var answerBank = [1,2,3,4,5];

	//For every question in questionBank, create an element tag with the question #, question, and answer button
	questionBank.forEach(function(value, index){

		var row = $('<div>').addClass("row"); //Create Row
		var col = $('<div>').addClass("col-md-6"); //Create Column
		var group = $('<div>').addClass("input-group-btn");	//Create button div (container)

		var button = $('<button>', {"class":"btn btn-default dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true",// Create button
			 "aria-expanded": "false"}).html("Choose an Option ");
		var caret = $('<span>').addClass("caret"); //Create caret for button
		button.append(caret);	//Add caret to button

		var list = $('<ul>').addClass("dropdown-menu"); //Create dropdown menu
			answerBank.forEach(function(value1, index){
				var item = $('<li>').append("<a href=\"#\">"+value1+"</a>");
				list.append(item);
			});

		row.append(col.append(group.append(button, list))); //Add everything (div's, button, list) above together
		
		var questNum = $('<h3>').html("Question "+(index+1)+":"); //Question # div
		var quest = $('<h4>').html(value);	//Question div
		$("#startQuest").append(questNum, quest, row);	//Add question #, question, and dropdown to page
		
	});

	//Add submit button
	var row = $('<div>').addClass("row"); //Create Row
	var col = $('<div>').addClass("col-md-12"); //Create Column
	var para = $('<p>').addClass("submitButton");
	var button = $('<button>', {"class":"btn btn-default center", "onClick":"validate()"}).html("Submit Survey!"); //Create button
	$("#startQuest").append(row.append(col.append(para.append(button))));
}



$(document).ready(function(){
	createForm();
	$(".dropdown-menu li a").on("click", function(e){
		var value =  parseInt($(this).find('option:selected').context.innerHTML);
		 $(this).parents('.input-group-btn').find('.dropdown-toggle').html(value+' <span class="caret"></span>');
		  e.preventDefault();
	});

})


