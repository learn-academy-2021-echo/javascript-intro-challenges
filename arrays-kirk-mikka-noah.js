// // //Write the code that will add "soda" to the end of the original array.
// //
// // Write the code that will add "granola" to the end of array without altering the original array.
// //
// // Write the code that will return a subset of the array containing only "chips" and "dip".
// //
// // Write the code that will add "beans" to the "chips" and "dip" array.

// var groceryList = ["chips", "dip", "cookies"];

// groceryList.push("soda");
// console.log(1, groceryList);

// var addOn = ["granola"];
// var newList = groceryList.concat(addOn);
// console.log(2, newList);
// // console.log(groceryList);

// var miniList = groceryList.slice(0, 2);
// console.log(3, miniList);

// miniList.push("beans");
// console.log(4, miniList);

// var numbers = [2, 4, 6, 8, 10];
// // Write the code that will add the number 0 to the beginning of the array.

// numbers.unshift(0);
// console.log(numbers);

// // Write the code that will add the number 12 to the end of the array.

// numbers.push(12);
// console.log(numbers);
// // Write the code that will remove the first number from the array.

// numbers.shift();
// console.log(numbers);

// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

// let newNumbers = [0];
// console.log(newNumbers.concat(numbers));

// console.log(numbers);

// var numSet = [2, 13, 6, 8, 4, 2];

// // Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2));

// // Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2));

// // Write the code that returns the number at the third index.
// console.log(numSet[2]);

var characters = ["y", "a", "r", "r", "a"];

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""));

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
let charsReversed = characters.reverse();
console.log(charsReversed);

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"));

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each.
let cohortNames1 = ["Mikka", "Noah", "Frank"];
let cohortNames2 = ["Regina", "Kirk", "Jason"];

// Write the code that sorts the names in alphabetical order.
cohortNames1.sort();
cohortNames2.sort();
console.log(cohortNames1);
console.log(cohortNames2);

// Write the code that sorts the names in reverse alphabetical order.
console.log(cohortNames1.reverse());
console.log(cohortNames2.reverse());

// Write the code that sorts all the names in alphabetical order in a single array.
let allNames = cohortNames1.concat(cohortNames2);
allNames.sort();
console.log(allNames);
