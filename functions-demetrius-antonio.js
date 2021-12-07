// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome ${name}!`
}
console.log(greeting("Demetrius"));
//
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) =>{
  if (number % 2 === 0) {
    return "even"
  }
  return "odd"
}
console.log(oddOrEven(2));
console.log(oddOrEven(3));
//
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) =>{
  return number * 3
}
console.log(triple(2));
//
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply  = (num1, num2) =>{
  return num1 * num2
}
console.log(multiply(8, 2));

//
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
  let msg = null;
  if (num1 % num2 === 0){
    msg = `${num1} is evenly divisible by ${num2}`;
  } else {
    msg = `${num1} is not evenly divisible by ${num2}`
  }
    return msg
}
console.log(divisibleBy(10, 5));
//
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (num) => {
  //this would check if the number is less than 100 but greater than 90
  if (num >= 90 && num <= 100){
    return "You get an A"
  // this would check if the number is between 80 and 89
  } else if (num >= 80 && num <= 89){
    return "You get a B"
  } else if (num >= 70 && num <= 79){
    return "You get a C"
  } else if (num >= 60 && num <= 69){
    return "You get a D"
  } else {
    return "You get an F"
  }
}
console.log(assignGrade(56));
//
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1;
  }
  return str2;
}

console.log(isLonger("rocket", "bunny"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
  if (num1 > num2){
    return num1;
  } else {
    return num2
  }
}

console.log(greaterNum(7,65));
//
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str) => {
  return str.toUpperCase();
}
console.log(yelling("madvillian"));

//
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
//
const helloWorld = (langCode = 'en') => {
  const pairs = {'en': 'Hello World', 'es': 'Hola Mundo', 'de': 'Hej Verden', 'fr': 'Bonjour le monde', 'it': 'Cia mondo'};

  try {
    return pairs[langCode];
  } catch (e) {
    return 'language not supported';
  }
}

console.log(helloWorld());
console.log(helloWorld('fr'));

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
const pluralizer = (num, noun) => {
  if (num > 1) {
    return `${num} ${noun}s`;
  }
  return `${num} ${noun}`;
}
console.log(pluralizer(5, "cat"));
console.log(pluralizer(1, "dog"));
