// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
//
// Make sure you try different options and change the variables to ensure properly working code.
//
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
//
var item= 90
if (item<100){
  console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//
var hungry=false
if(hungry=== true){
  console.log("eat food")

}else {console.log ("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
//
var trafficLight="yellow"
if(trafficLight=== "green"){console.log("go")
}
else if(trafficLight==="yellow"){console.log("slow down")}
else{console.log("stop")}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
//
var number1=5
var number2=8
if(number1>number2){
  console.log(number1)
}
else if (number2>number1){
  console.log(number2)
}

else {
  console.log ("numbers are the same")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
//
var number=0
if (number===0){
  console.log("then is zero")
}
else if(number% 2 >0){
  console.log ("then is odd")
}
else{
  console.log("then is even")
}
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
//
var scoreTest=0
if(scoreTest===100){
  console.log("perfect score")
}
else if(scoreTest===0){
  console.log("no grade available")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
//
var variable= 9
console.log(typeof variable)
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
//
