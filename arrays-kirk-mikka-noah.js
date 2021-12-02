// //Write the code that will add "soda" to the end of the original array.
//
// Write the code that will add "granola" to the end of array without altering the original array.
//
// Write the code that will return a subset of the array containing only "chips" and "dip".
//
// Write the code that will add "beans" to the "chips" and "dip" array.

var groceryList = ["chips", "dip", "cookies"]

groceryList.push("soda");
console.log(1, groceryList);

var addOn = ["granola"];
var newList = groceryList.concat(addOn);
console.log(2, newList);
// console.log(groceryList);

var miniList = groceryList.slice(0,2)
console.log(3, miniList);

miniList.push("beans")
console.log(4, miniList);
