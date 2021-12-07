// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// declare function
const marco = () => {
  // return polo
  return "polo";
};
console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// declare function with parameter (name)
const greeting = (name) => {
  //return greeting
  return `Welcome, ${name}!`;
};
console.log(greeting("Noah"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// declare function with a parameter that is a number
const oddOrEven = (num) => {
  // test if odd or even with modulo conditional
  // return odd or even
  return num % 2 === 0 ? "Your number is even!" : "Your number is odd!";
};
console.log(oddOrEven(88));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//declare function with an input of a number
const triple = (num) => {
  //return input times 3
  return console.log(num * 3);
};
triple(11);

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Delclare a function that takes two numbers as inputs and multiplies them together
const multiply = (num1, num2) => {
  //Multiply the inputs together
  return num1 * num2;
};

console.log(multiply(7, 11));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//declare function divisibleBy with two inputs
const divisibleBy = (dividend, divisor) => {
  //return if first number is evenly divisible by the second number
  return dividend % divisor === 0
    ? `${dividend} is evenly divisible by ${divisor}`
    : `${dividend} is not evenly divisible by ${divisor}`;
};
console.log(divisibleBy(44, 22));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

//declare function assignGrade with a score as an input
const assignGrade = (score) => {
  //return a letter grade for the score
  if (score >= 90) {
    return console.log("You got an A");
  } else if (score >= 80) {
    return console.log("You got a B");
  } else if (score >= 70) {
    return console.log("You got a C");
  } else if (score >= 60) {
    return console.log("You got a D");
  } else {
    return console.log(
      `Sorry, you're going to have to retake this course, you got a ${score}% 😿`
    );
  }
};
assignGrade(Math.floor(Math.random() * 101));

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// declare a fuction with two arguments
const isLonger = (string1, string2) => {
  // compare the two string lenghts and return the longer one
  return string1.length > string2.length ? string1 : string2;
};

console.log(isLonger("Noahmeister", "Kirkster"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// declare function with two args
const greaterNum = (num1, num2) => {
  // return the larger number
  return num1 > num2 ? num1 : num2;
};

console.log(greaterNum(35, 363));

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// declare function with a string as a arg
const yelling = (string) => {
  // use uppercase method on string and return
  return string.toUpperCase();
};
console.log(yelling("get off my lawn"));

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// declare a function with a language code
const helloWorld = (langCode) => {
  // set conditions with if statements to return different languages using equality evaluations to check strings
  if (langCode === "es") {
    return "¡Hola, mundo!";
  } else if (langCode === "de") {
    return "Hallo, welt!";
  } else if (langCode === "zh") {
    return "你好，世界!";
  } else if (langCode === "ru") {
    return "Привет, мир!";
  } else if (langCode === "tl") {
    return "Hello, mundo!";
    // defaulting to english if code not included
  } else {
    return "Hello, world!";
  }
};

console.log(helloWorld("ru"));

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// const pluralizer = (num, noun) => {
//   return console.log(num === 1 ? `${num} ${noun}` : `${num} ${noun}s`);
// }
//
//
// pluralizer(5, "cat")
// // // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

//make a switch statement to do this

// const pluralized = (num, noun) => {
//   if (num === 1) {
//     return console.log(`1 ${noun}`);
//   } else if (num > 1) {
//     if (noun === 'sheep') {
//       return console.log(`${num} sheep`);
//     } else {
//       return console.log(`${num} ${noun}s`);
//     }
//   }
// }

// declare function with two args, a number and a noun (string)
const pluralizer = (num, noun) => {
  // if num is 1 then just log 1 and a singular noun
  if (num === 1) {
    return console.log(`1 ${noun}`);
    // if num is greater than 1 and weirdif so build out cases
  } else {
    // if it's a weird noun, build cases for them
    switch (noun) {
      case "sheep":
        console.log(`${num} sheep`);
        break;
      case "child":
        console.log(`${num} children`);
        break;
      case "octopus":
        console.log(`${num} octopodes`);
        break;
      case "goose":
        console.log(`${num} geese`);
        break;
      case "person":
        console.log(`${num} people`);
        break;
      case "species":
        console.log(`${num} species`);
      // if it's just a regular noun then just add s (probably the else)
      default:
        console.log(`${num} ${noun}s`);
    }
  }
};

pluralizer(7, "cat");
pluralizer(1, "cat");
pluralizer(1, "sheep");
pluralizer(3, "sheep");
pluralizer(5, "child");
pluralizer(1, "child");
pluralizer(2, "octopus");
pluralizer(1, "octopus");

//
//
//
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
