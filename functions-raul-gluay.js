// Write a function named marco that returns "polo"
// const marco = (name) => {
//   return `${name}`
// }
// console.log(marco("polo"));

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//   return `Welcome, ${name}!`
// }
// console.log(greeting("Paul"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (num) => {
//   if(num % 2 === 0) {
//     return "Even"
//   } else {
//     return "Odd"
//   }
// }
// console.log(oddOrEven(4));


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (num) => {
//   return num * 3
// }
//
// console.log(triple(8));


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//   return num1 * num2
// }
// console.log(multiply(7,8));


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//   if(num1 % num2 === 0){
//     return `${num1} is evenly divisible ${num2}`
//   } else {
//     return "Try harder!"
//   }
// }
// console.log(divisibleBy(10,5));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//   if(score >= 90) {
//     return `Your grade is ${score}, you got an A`
//   } else if (score >= 80){
//     return `Your grade is ${score}, you got a B`
//   }
// }
// console.log(assignGrade(85));

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// const isLonger = (string1, string2) => {
//
//   if(string1.length > string2.length) {
//     return `${string1} is longer than ${string2}`
//   } else if (string1.length < string2.length){
//     return `${string2} is longer than ${string1}`
//   } else {
//     return `${string1} is equals ${string2}`
//   }
//
// }
// console.log(isLonger("Raul", "Matt"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//   if(num1 > num2){
//     return num1
//   } else {
//     return num2
//   }
// }
// console.log(greaterNum(7,8));


// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (word) => {

  return word.toUpperCase();
}
console.log(yelling("done!"));
