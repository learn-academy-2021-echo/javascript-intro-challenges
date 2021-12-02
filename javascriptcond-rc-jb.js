// Conditional challenges

// Question 1: Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 101;

if(item <= 100){
    console.log("in budget");
}

// Question 2: Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hungry = "meh";

if(hungry === "hungry"){
    console.log("eat food");
}   else {
    console.log("keep coding");
}

// Question 3: Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "green";

if(trafficLight = "green"){
    console.log("go");
} else if(trafficLight = "yellow"){
    console.log("slow down");
} else if(trafficLight = "red"){
    console.log("stop");
}

// Question 4: Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let x = 25;
let y = 25;

if(x = y){
    console.log("the numbers are the same");
} else if(x > y){
    console.log(x);
} else if(x < y){
    console.log(y);
}

// Question 5: Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let z = -9;

if(z === 0){
    console.log("the number is zero");
}
else if(z !== 0){
    z %= 2;
}

if (z === 1 || z === -1){
    console.log("the number is odd");
} else if(z === 0){
    console.log ("the number is even");
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 100

if (grade === 100){
    console.log("perfect!")
}
else if (grade > 90) {
    console.log("A");
}else if (grade > 80) {
    console.log("B");
}else if (grade > 70) {
    console.log("C");
}else if (grade > 60){
    console.log("D");
}else {
    console.log("F");
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var num = "awefawef"

console.log(typeof num);


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "awef1212j88f1wefj"

if (password.length > 12 && password.includes("!")){
    console.log("thats a good password");
} else {
    console.log("that sucks");
}