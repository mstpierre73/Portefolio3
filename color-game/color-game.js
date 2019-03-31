
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
/*make mode hard and easy buttons*/
makeModeButtons();
/*play the game*/
setUpSquares(); 
/*reset the game*/
reset();
}


function changeColors(color) {
/*loop all squares and change colors to match pickedColor*/
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
	}
}

/*give random color to guess*/
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	/*make an array and push random colors to array*/
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

/*create random colors*/
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

/*reset the game*/
function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
}

/*make the reset button*/
resetButton.addEventListener("click", function(){
	reset();
});

/*make mode hard and easy buttons*/
function makeModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numberOfSquares = 3;
		} else {
			numberOfSquares = 6;
		}
		reset();
	});
}
}

function setUpSquares(){
	/*play the game*/
for(var i = 0; i < squares.length; i++){


	/*add Event listener to squares*/
	squares[i].addEventListener("click", function(){
		/*grab color of cliqued square*/
		var clickedColor = this.style.backgroundColor;
		/*compare with picked color and output result*/
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct !";
			resetButton.textContent = "Play Again ?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again !";
		}
	});
}; 
}
