// Write the code that will add "soda" to the end of the original array.

var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList);

// Write the code that will add "granola" to the end of array without altering the original array.

var groceryList = ["chips", "dip", "cookies"]
groceryList.push("granola")
console.log(groceryList);

// Write the code that will return a subset of the array containing only "chips" and "dip".

var groceryList = ["chips", "dip", "cookies"]
// groceryList.slice(0, 2)
console.log(groceryList.slice(0, 2));

// Write the code that will add "beans" to the "chips" and "dip" array.
var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList.slice(0, 2));
groceryList.push("beans")
console.log(groceryList);
