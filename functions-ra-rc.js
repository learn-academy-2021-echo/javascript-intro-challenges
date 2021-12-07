// Write a function named marco that returns "polo".
// const marco = () => {
//     return console.log("polo");

// }
// marco()


// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `welcome, ${name}`

// }
// console.log(greeting("Regina"));

// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if(number % 2 === 1){
//     return "odd"
// } else {
//     return "even"
// }
// }
// console.log(oddOrEven(2));

// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) =>{
//     return number*3
// }
// console.log(triple(4));

// // Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2 
// }
// console.log(multiply(2, 7))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    } else{
        return "not divisible"
    }
}

console.log(divisibleBy(5, 10))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) => {
    if (score > 90 && score < 101){
        return "A"
    } else if (score > 80 && score < 90){
        return "B"
    } else if (score > 70 && score < 80){
        return "C"
    } else if (score > 60 && score < 70){
        return "D"
    } else {
        return "F"
    }
}

console.log(assignGrade(49))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.


const isLonger = (str1, str2) => {
    if (str1.length > str2.length){
        return str1
    } else {
        return str2
    }
}

console.log(isLonger("Reginas", "Robert"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1, num2) => {
    if (num1 > num2){
        return num1
    } else {
        return num2
    }
}

console.log(greaterNum(34, 12));

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// // pseudo code
// need to declare variable (const)
// need name (in camelCase)
// need assignment operator
// need parameter thing ()
// need fat arrow => 
// need code block to convert lower case to upper case {} 
// need to return the string in all uppercase
// need to call function with parameters

const yelling = (str) => {
    return str.toUpperCase()
}

console.log(yelling("chill out"));



// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
//going to initiate function with name helloWorld
//going to use languages, english, spanish, dutch, french, japanese
//use if statement to cycle through conditional values to find correct language

const helloWorld = (langCode) => {
    if (langCode === "en"){
        return "Hello World!"
    } else if (langCode === "es"){
        return "Hola Mundo!"
    } else if (langCode === "de"){
        return "Hallo Wereled!"
    } else if (langCode === "jp"){
        return "Konichiwa Sekai!"
    } else if (langCode === "fr"){
        return "Bonjour le monde!"
    } else {
        return "Hello World!"
    }
}

console.log(helloWorld("it"));

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (num, animal) => {
    if (num === 1){
        return `${num} ${animal}`
    }
}

console.log(pluralizer(1, "dog"));