 // alert ("working");
 var randomNumber1 = Math.floor(Math.random()*6)+1;
 var randomNumber2 = Math.floor(Math.random()*6)+1;

//assign the left image to the randomNumber1
var dice1Image = document.querySelectorAll("img")[0].setAttribute("src","images/Dice"+randomNumber1+".png");
//assign to the right too:
var diceImage2 = document.querySelectorAll("img")[1].setAttribute("src","images/Dice"+randomNumber2+".png");
//calculate the value to assign the h1 result
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🐼 Ellis Wins!";
}
  else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="🐼 Esmé Wins!";
  }
  else {
    document.querySelector("h1").innerHTML="Draw";
  }
