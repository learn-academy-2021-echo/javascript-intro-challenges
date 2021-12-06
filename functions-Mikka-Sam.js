// Write a function named marco that returns "polo".

const marco= ()=> {
  return "polo"
}

// console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name)=> {
  return `Welcome, ${name}!`
}
// console.log(greeting("Samantha"))



// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven =(number)=> {
  if (number % 2 === 0){
    return `number ${number} is even`
  }
  else
   return `number ${number} is odd`
  }
  // console.log(oddOrEven (3))
  // console.log(oddOrEven (4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num1) => {
  return num1 * 3
}
  console.log(triple(5));



//Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1,num2)=>{
return num1 * num2
}
console.log(multiply(4,5))

//Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) =>{
  if (num1 % num2 === 0){ //compares if num1 and num2 remainder is 0, therefore evenly divisible
    return `${num1} is evenly divisible by ${num2}`;
  }else { //if remainder is not 0, it is not divisible
    return `${num1} is NOT evenly divisible by ${num2}`;
  }
}
console.log(divisibleBy(10,5)); //this should return is evenly divisible
console.log(divisibleBy(17,5)); //this should return NOT evenly divisible


//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) =>{
  if (score >= 90){
    return `A`;
  }else if (score >= 80 && score < 90){
    return `B`;
  }else if (score >= 70 && score < 80){
    return `C`;
  }else if (score >=60 && score <70){
    return `D`;
  }else{
    return `F`;
  }
}
console.log(assignGrade(91)); //returns A
console.log(assignGrade(82)) // returns B
console.log(assignGrade(75)) //returns C
console.log(assignGrade(63)) //returns D
console.log(assignGrade(10)) //returns F

//Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (str1,str2) => {
  if (str1.length > str2.length){
    return str1;
  }else if (str2.length > str1.length){
    return str2;
  }else if (str1.length === str2.length){
    return `${str1} and ${str2} are of the same length`
  }
}

console.log(isLonger("book", "read")); //should return same length
console.log(isLonger("christmas", "holiday")); //should return christmas
console.log(isLonger("joy", "happy")); //should return happy

//Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1,num2) =>{
  if (num1 > num2){
    return num1;
  }else if (num2 > num1){
    return num2;
  }else{
    return `${num1} and ${num2} are the same`
  }
}

console.log(greaterNum(3,3)); //should return same
console.log(greaterNum(5,3)); //should return 5
console.log(greaterNum(3,10)); //should return 10

//Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (str) =>{
  return str.toUpperCase();
}

console.log (yelling("sam")); //should return SAM


// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

const helloWorld =(language)=>{
  if(language == "sp"){
    return "HolaMundo"
  }
  else if (language == "tag"){
    return "KamustaKaMundo"
  }
  else if(language == "ch"){
  return "NiHaoShijie"
}

  else if (language == "fr"){
  return "BonjourLeMonde"
}
else {
  return "helloWorld"
}
}
 console.log(helloWorld("tag"));// This is going to return KamustaKaMundo

 //The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

const pluralizer = (num,noun) =>{
  if (num === 1){
    return `${num} ${noun}`;
  }else if (num > 1){
    return `${num} ${noun}s`;
  }
}

console.log (pluralizer(1,"cat")); //should return 1 cat
console.log (pluralizer(3,"dog")); //should return 3 dogs
