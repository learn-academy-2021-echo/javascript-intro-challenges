// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 101;

if (item <= 100){
  console.log("You are within budget, go buy it!")
}

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true;

if (hungry === true){
  console.log ("You are hungry go eat!")
  }else {
  console.log ("Keep coding, hacker!")
}

//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green";

if (trafficLight === "green"){
  console.log("Go!")
}else if (trafficLight === "yellow"){
  console.log("Slow Down!")
}else if (trafficLight === "red"){
  console.log("Stop!")
}

//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 1000;
var num2 = 99;

if (num1 > num2){
  console.log(num1)
}else if (num2 > num1){
  console.log(num2)
}else{
  console.log ("The numbers are the same")
}
