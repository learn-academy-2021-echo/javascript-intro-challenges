// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 101;

if (item <= 100) {
  console.log("You are within budget, go buy it!");
}

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true;

if (hungry === true) {
  console.log("You are hungry go eat!");
} else {
  console.log("Keep coding, hacker!");
}

//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green";

if (trafficLight === "green") {
  console.log("Go!");
} else if (trafficLight === "yellow") {
  console.log("Slow Down!");
} else if (trafficLight === "red") {
  console.log("Stop!");
}

//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 1000;
var num2 = 99;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("The numbers are the same");
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num = 2;
if (num === 0) {
  console.log("Your number is zero!");
} else if (num % 2 === 1) {
  console.log("Your number is odd!");
} else if (num % 2 === 0) {
  console.log("Your number is even!");
} else {
  console.log("Your number is weird!");
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 0;
if (grade === 100) {
  console.log("Perfect Score!!!");
} else if (grade >= 90 && grade < 100) {
  console.log("You got an A!!");
} else if (grade >= 80 && grade < 90) {
  console.log("You got a B!");
} else if (grade >= 70 && grade < 80) {
  console.log("You got a C.");
} else if (grade >= 60 && grade < 70) {
  console.log("You got a D..");
} else if (grade < 60 && grade > 0) {
  console.log("You got an F...");
} else if (grade === 0) {
  console.log("No grade available!!!");
} else {
  console.log("Something went wrong...");
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var dataType = true;
if (typeof dataType) {
  console.log("Your data is a Boolean");


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
