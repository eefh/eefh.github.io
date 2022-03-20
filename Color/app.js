const colors = ["#0000f0", "#ffffff", "#fff000", "#000000"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const red = document.getElementById("r")
const green = document.getElementById("g");
const blue = document.getElementById("b");
const pr = document.querySelector(".pr");
const pg = document.querySelector(".pg");
const pb = document.querySelector(".pb");

var bgColor = [getRandomNumber(),getRandomNumber(),getRandomNumber()]
var bgRGBA = "rgba("

document.body.style.backgroundColor = bgRGBA.concat(bgColor[0],",",bgColor[1],",",bgColor[2],")");

btn.addEventListener("click", function(){
    
    //p.textContent = bgRGBA.concat(bgColor[0],",",bgColor[1],",",bgColor[2],")");
    pr.textContent = "Red Guess: " + red.value + " Red Truth: " + bgColor[0]; 
    pg.textContent = "Green Guess: " + green.value + " Green Truth: " + bgColor[1];
    pb.textContent = "Blue Guess: " + blue.value + " Blue Truth: " + bgColor[2];
    console.log(bgRGBA.concat(bgColor[0],",",bgColor[1],",",bgColor[2],")"));
    reset();
    
});

function reset(){
    bgColor = [getRandomNumber(),getRandomNumber(),getRandomNumber()]
    document.body.style.backgroundColor = bgRGBA.concat(bgColor[0],",",bgColor[1],",",bgColor[2],")");
}
function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}