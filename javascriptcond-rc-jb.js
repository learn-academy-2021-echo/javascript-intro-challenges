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

