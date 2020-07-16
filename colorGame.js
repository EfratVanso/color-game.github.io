var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var h1 = document.querySelector("h1")
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

for(var i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
});
}//for 

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;        
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // add num random colors to array
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor(){
    //pick green, red and blue between 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}

//button reset event
$("#reset").click(function() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];        
        }
    h1.style.backgroundColor = "#232323";
});

$("#easyBtn").click(function() {
    $("#easyBtn").addClass("selected");
    $("#hardBtn").removeClass("selected");

});

$("#hardBtn").click(function() {
    $("#hardBtn").addClass("selected");
    $("#easyBtn").removeClass("selected");

});