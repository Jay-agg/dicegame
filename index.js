
var randomNumber1 = Math.floor((Math.random()*6) +1);

var leftdice = ("./images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[0].setAttribute("src" , leftdice);


var randomNumber2 = Math.floor((Math.random()*6)+1);

var rightdice = ("./images/dice" + randomNumber2 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", rightdice);

if(leftdice===rightdice){
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(leftdice>rightdice){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";

}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}