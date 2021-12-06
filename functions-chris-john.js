// Challenges

// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }

// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (personName) => {
//     return `Welcome, ${personName}!`
// }
// console.log(greeting("Chris"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if(number % 2 === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(4));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//         return number *= 3
// }
// console.log(triple(6));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//       return num1 * num2
// }
// console.log(multiply(15, 69));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) =>{
//         if( num1 % num2 === 0){
//             return `${num1} is evenly divisible by ${num2}`
//         } else {
//             return "Not evenly divisible"
//         }
// }
// console.log(divisibleBy(10,5));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//        if(score >= 90){
//            return "A"
//        } else if (score >= 80){
//            return "B"
//        } else if (score >= 70){
//            return "C"
//        } else if (score >= 60){
//            return "D"
//        }else {
//            return "NOPE"
//        }
// }
// console.log(assignGrade(13));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (string1, string2) =>{
//        if(string1.length > string2.length){
//            return string1
//        } else if (string1.length < string2.length){
//            return string2
//        } else {
//            return "equal"
//        }

//        }
//        console.log(isLonger ("bleh", "mehhhh"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//        if (num1 > num2){
//            return num1
//        } else if (num1 < num2){
//            return num2
//        } else{
//            return "equal"
//        }
// }
// console.log(greaterNum(34, 9));
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yellings = (capitol) => {
//         return capitol.toUpperCase()
// }
// console.log(yellings("hello world"));


// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
// const helloWorld = (translate) => {
//     if (translate === "en"){
//         return "hello world"
//     } else if (translate ===  "es"){
//         return "hola mundo"
//     } else if (translate === "ja"){
//         return "Kon'nichiwa sekai"
//     } else if (translate === "ko"){
//         return "annyeonghaseyo segye"
//     } else if (translate === "ge"){
//     return "hallo welt"
//     } else {
//         return "hello world"
//     }
    
// }
// console.log(helloWorld("rs"));

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (num, noun) => {
    if (noun === "goose" && num > 1){
        return `${num} geese`
    }
    else if (noun === "child" && num > 1){
        return `${num} children`
    }
    else if (noun === "person" && num > 1){
        return `${num} people`
    }
    else if (num === 1){
        return `${num} ${noun}`
    } 
    else if (num > 1){
        return `${num} ${noun}s`
    }
}

// console.log(pluralizer(5, "cat"))
// console.log(pluralizer(1, "dog"))
// console.log(pluralizer(4, "goose"))
// console.log(pluralizer(3, "child"))
console.log(pluralizer(6, "person"))