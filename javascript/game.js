// random number to try and add too

var gameWin = Math.floor(Math.random() * 120) + 19;

// display gameWin in #gameNumber div
$("#gameNumber").html(gameWin);

// create random numbers for fruit

var cherry = Math.floor(Math.random() * 19) + 1;
var orange = Math.floor(Math.random() * 19) + 1;
var banana = Math.floor(Math.random() * 19) + 1;
var berry = Math.floor(Math.random() * 19) + 1;

// console log for clarity
console.log(cherry, orange, banana, berry);

// var total is will be the value of var totalGuess added together
	var total = 0;
// var totalGUess will hold the value of the fruits once they are clicked on
    var totalGuess = [];

// when cherry is clicked
$("#cherry").on("click", function(){
	// we push the value of cherry to the arry
	totalGuess.push(cherry);
// this is supposed to update var totoal to the array added together
	for(i = 0; i < totalGuess.length; i++){
	total += totalGuess[i];};

	// show what our totoal is and what is in the array
	console.log(total);
	console.log(totalGuess);
	
});

$("#orange").on("click", function(){
	totalGuess.push(orange);

		for(i = 0; i < totalGuess.length; i++){
	total += totalGuess[i];};
	
	console.log(total);
});

$("#banana").on("click", function(){
	totalGuess.push(banana);
		for(i = 0; i < totalGuess.length; i++){
	total += totalGuess[i];};
	
	console.log(total);
});

$("#berry").on("click", function(){
	
	totalGuess.push(berry);

		for(i = 0; i < totalGuess.length; i++){
	total += totalGuess[i];};
	
	console.log(total);
});





// give random num values to fruit

