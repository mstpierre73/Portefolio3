
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




for(var i = 0; i < squares.length; i++){
	/*add initial colors to sqares*/
	squares[i].style.backgroundColor = colors[i];

	/*add Event listener to squares*/
	squares[i].addEventListener("click", function(){
		/*grab color of cliqued square*/
		var clickedColor = this.style.backgroundColor;
		/*compare with picked color*/
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
}; //end of for loop

function changeColors(color) {
/*loop all squares and change colors to match pickedColor*/
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
	}
}

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

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

resetButton.addEventListener("click", function(){
	/*generate new colors and erase message*/
	colors = generateRandomColors(numberOfSquares);
	/*pick a new random color from array*/
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function(){
	numberOfSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
});

hardBtn.addEventListener("click", function(){
	numberOfSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
});