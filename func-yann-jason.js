// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("Yann"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if (number%2 === 0) {
    return `${number} is even number.`
  }else if (number%2 === 1) {
    return `${number} is odd number.`
  }else {
    return `Sorry, please input an interger.`
  }
}
console.log(oddOrEven(12));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  result = number * 3
  return `${number} times 3 equals ${result}!`
}
console.log(triple(4));
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) => {
    result = number1 * number2
    return `${number1} times ${number2} equals ${result}.`
  }
console.log(multiply(10, 5));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisisble by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (number1, number2) => {
  if ((number1 / number2)%2 ===1 || (number1 / number2)%2 === 0) {
    return `${number1} is evenly divisible by ${number2}.`
  }else {
    return `Sorry, try some divisible number combos.`
  }
}
console.log(divisibleBy(10, 5));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
    if ((number <= 100) && (number >= 90)) {
      return `Your letter grade for the score is A.`
    }else if ((number < 90) && (number >= 80)) {
      return `Your letter grade for the score is B.`
    }else if ((number < 80) && (number >= 70)) {
      return `Your letter grade for the score is C.`
    }else if ((number < 70) && (number >= 60)) {
      return `Your letter grade for the score is D.`
    }else if ((number < 60) && (number >= 0)) {
      return `Your letter grade for the score is F.`
    }else{
      return `Try a valid number, plz.`
    }
}
console.log(assignGrade(65));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
      return `${string1} is longer than ${string2}.`
    }else if(string1.length < string2.length) {
      return `${string1} is shorter than ${string2}.`
    }else {
        return `${string1} is as long as ${string2}.`
    }

  }
console.log(isLonger("looooong", "long"));
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (number1, number2) => {
    if (number1 > number2) {
      return `${number1} is greater than ${number2}.`
    }else if(number1 < number2) {
      return `${number1} is smaller than ${number2}.`
    }else {
        return `${number1} equals ${number2}.`
    }
  }
console.log(greaterNum(22,22));
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
    return `${string.toUpperCase()}!!!!!!!`
  }
console.log(yelling("string"));
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
const helloWorld = (languageCode) => {
      if (languageCode === "en") {
        return `Hello World!!`
      }else if (languageCode === "es") {
        return `Hola Mundo!!`
      }else if (languageCode === "de") {
        return `Hallo Welt!!`
      }else if (languageCode === "fr") {
        return `Bonjour le monde!!`
      }else if (languageCode === "chn") {
        return `你好世界!!`
      }else{
        return `Hello World!!`//default to returning English.
      }
  }
console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("fr"));
console.log(helloWorld("chn"));
// (b) Have your function default to returning English.
// const helloWorld = (languageCode) => {
//       if (languageCode === "en") {
//         return `Hello World!!`
//       }else if (languageCode === "es") {
//         return `Hola Mundo!!`
//       }else if (languageCode === "de") {
//         return `Hallo Welt!!`
//       }else if (languageCode === "fr") {
//         return `Bonjour le monde!!`
//       }else if (languageCode === "chn") {
//         return `你好世界!!`
//       }else{
//         return `Hello World!!`//||||||default to returning English.||||||
//       }
//   }
// console.log(helloWorld("en"));
// console.log(helloWorld("es"));
// console.log(helloWorld("de"));
// console.log(helloWorld("fr"));
// console.log(helloWorld("chn"));
// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"

// const pluralizer = (number, singularNoun) => {
//     if (number === 1) {
//         return `1 ${singularNoun}.`;
//     }else if (number > 1) {
//         return `${number} ${singularNoun}s.`;
//     }else {
//           return `Try again.`;
//     }
//   }
// console.log(pluralizer(2, "cat"));


// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
const pluralizer = (number, singularNoun) => {
    if (number === 1) {
      return `1 ${singularNoun}.`;
    }else if ((number > 1) && singularNoun === "sheep"){
      return `${number} ${singularNoun}.`;
    }else if ((number > 1) && singularNoun === "goose"){
      return `${number} ${"geese"}.`;
    }else if ((number > 1) && singularNoun === "child"){
      return `${number} ${"children"}.`;
    }else if ((number > 1) && singularNoun === "person"){
      return `${number} ${"people"}.`;
    }else if ((number > 1) && singularNoun === "species"){
      return `${number} ${"specieses"}.`;
    }else if (number > 1) {
      return `${number} ${singularNoun}s.`;
    }else {
      return `Try again.`;
    }
  }
console.log(pluralizer(2, "cat"));
console.log(pluralizer(2, "sheep"));
console.log(pluralizer(2, "goose"));
console.log(pluralizer(2, "child"));
console.log(pluralizer(2, "person"));
console.log(pluralizer(2, "species"));
