// This is our cond. pratcice file
//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 98

if (item < 100) {
  console.log("In budget.")
}

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if (hungry === true) {
  console.log("eat food");
} else {
  console.log("Keep coding!")
}

//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if (trafficLight === "green") {
  console.log("go")
} else if (trafficLight === "yellow") {
  console.log("Slow Down");
} else if (trafficLight === "red") {
  console.log("Stop");
} else {
  console.log("Pick a valid color!")
}
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numOne = 100
var numTwo = 2

if (numOne > numTwo) {
  console.log(numOne);
}else {
  console.log(numTwo);
}


//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 31

if (num === 0) {
  console.log(num)
} else if (num % 2 === 0) {
  console.log("The number is even");
}else {
console.log("The number is odd");
}

//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 55

if (grade === 100) {
  console.log("Perfect Score!");
} else if (grade <= 0) {
  console.log("There is no grade available");
} else if (grade <= 99 && grade >= 90) {
  console.log("You got an A!");
} else if (grade <= 89 && grade >= 80) {
  console.log("You got an B!");
} else if (grade <= 79 && grade >= 70) {
  console.log("You got an C!");
}else if (grade <= 69 && grade >= 60) {
  console.log("You got an D!");
} else  {
  console.log("You got an F :(");
}


//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var iable = false
var iableTwo = typeof iable
console.log(iableTwo)
