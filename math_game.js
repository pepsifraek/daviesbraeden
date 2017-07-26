var a = prompt("Enter a number");
var b = prompt("Enter a number");
var randomNum = Math.floor((Math.random () * 4)+ 1);
	
if (randomNum == 1){

var correctAnswer = Number(a) + Number(b);

 

var userAnswer = Number(prompt("What is " + a + " + " + b));}

else if(randomNum == 2){

var correctAnswer = Number(a) - Number(b);

 

var userAnswer = Number(prompt("What is " + a + " - " + b));}

if (randomNum == 3)
{var correctAnswer = Number(a) * Number(b);

 

var userAnswer = Number(prompt("What is " + a + " * " + b));}

else if(randomNum == 4){
var correctAnswer = Number(a) / Number(b);

 

var userAnswer = Number(prompt("What is " + a + " / " + b));}

if(correctAnswer == userAnswer)
{
                alert("you are correct");
}
else
{
                alert("you are NOT correct. The answer is " + correctAnswer );
}
