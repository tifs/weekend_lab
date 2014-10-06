// adds event listeners to each box for a click, then launches markX
var start = function () {
	var resetButton = document.getElementById("reset");
		resetButton.addEventListener("click", playAgain);
	for (i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", markX);
	}
};

// adds the letter X
var letter = "X";

// reset button
var playAgain = function() {
	for (i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = ""; 
		}
	};

var boxes = document.getElementsByClassName("box");

// // check to see if a win is contained in either player's tally
var winCheck = function() {
	for (i = 0; i < boxes.length; i++)
		if (boxes[0].innerHTML === boxes[1].innerHTML
			&& boxes[0].innerHTML === boxes[2].innerHTML
			&& boxes[0].innerHTML !== "") {
				console.log("THAT'S A WIN!!!");
	} else if (boxes[3].innerHTML === boxes[4].innerHTML 
		&& boxes[3].innerHTML === boxes[5].innerHTML 
		&& boxes[3].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[6].innerHTML === boxes[7].innerHTML 
		&& boxes[6].innerHTML === boxes[8].innerHTML 
		&& boxes[6].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[0].innerHTML === boxes[3].innerHTML 
		&& boxes[0].innerHTML === boxes[6].innerHTML 
		&& boxes[0].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[1].innerHTML === boxes[4].innerHTML 
		&& boxes[1].innerHTML === boxes[7].innerHTML 
		&& boxes[1].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[2].innerHTML === boxes[5].innerHTML 
		&& boxes[2].innerHTML === boxes[8].innerHTML 
		&& boxes[2].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[0].innerHTML === boxes[4].innerHTML 
		&& boxes[0].innerHTML === boxes[8].innerHTML 
		&& boxes[0].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else if (boxes[2].innerHTML === boxes[4].innerHTML 
		&& boxes[2].innerHTML === boxes[6].innerHTML 
		&& boxes[2].innerHTML !== "") {
			console.log("THAT'S A WIN!!!");
	} else {
	}
};

// if the box that's clicked on is empty, add a letter (X), add that to tallyX, check that tally, check if wins, then mark the next one O
var markX = function() {
	if (this.innerText === "") {
	this.innerText = letter;
	winCheck ();
	markO ();
	} // "else" this box is full
};

// if the box is empty and the letter just used is X, then add an O, add that to tallyO, check if wins, then mark the next one X
var markO = function() {
	if (letter === "X") {
		letter = "O";
		winCheck ();
	} else {	
		letter = "X";
	}
};

// // empty arrays for each player's marked boxes
// var tallyX = [];
// var tallyO = [];

// // function to add marked boxes to each player's tallys
// var addTallyX = function () {
// 	tallyX.push("")
// };



start();