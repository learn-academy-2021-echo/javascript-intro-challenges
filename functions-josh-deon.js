// const marco = () => {
//   return "Polo"
// }
// console.log(marco());

// const greeting = (name) => {
//   return `Welcome, ${name}!`
//
// }
// console.log(greeting("Elon"));

// const oddOrEven = (number) => {
//   if (number % 2 === 0){
//     return "Even"
//   } else {
//     return "Odd"
//   }
// }
//
// console.log(oddOrEven(32));

// const triple = (number) => {
//   return number *3
// }
// console.log(triple(24));

// const multiply = (num1, num2) => {
//   return num1 * num2
// }
//
// console.log(multiply(2, 4));

// const divisibleBy = (num1, num2) => {
//   if (num1%num2 === 0){
//     return `${num1} is evenly divisible by ${num2}`
//   } else {
//     return "No instructions given for this situation."
//   }
// }
// console.log(divisibleBy(10, 5));

// const assignGrade = (num) => {
//   if (num > 89){
//     return "Your grade is an A"
//   } else if (num > 79){
//     return "Your grade is a B"
//   } else if (num > 69){
//     return "Your grade is a C"
//   } else if (num > 59){
//     return "Your grade is a D"
//   } else {
//     return "You have failed!!!"
//   }
// }
//
// console.log(assignGrade(68));

// const isLonger = (string1, string2) => {
//   if (string1.length > string2.length){
//     return string1
//   } else {
//     return string2
//   }
// }
// console.log(isLonger("This is a longer string", "Than this is"));

// const greaterNum = (num1, num2) => {
//   if (num1 > num2){
//     return num1
//   } else {
//     return num2
//   }
// }
//
// console.log(greaterNum(5, 64));

// const yelling = (string) => {
//   return string.toUpperCase()
// }
//
// console.log(yelling("yolo"));

// STRETCH CHALLENGES

const helloWorld = (languageCode) => {
  if (languageCode === "es"){
    return "Hola, mundo!"
  } else if (languageCode === "pt") {
    return "Ola, mundo!"
  } else if (languageCode === "fr"){
    return "Bonjour, le monde!"
  } else if (languageCode === "it"){
    return "Ciao, mondo!"
  } else {
    return "Hello, world!"
  }
}

console.log(helloWorld("en"));
