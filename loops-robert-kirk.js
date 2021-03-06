// Challenges
// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// Write a for loop that logs the result of each number from 1 - 20 tripled.

for (let i = 1; i < 21; i++) {
  console.log(i * 3);
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

for (let i = 1; i < 21; i++) {
  if (i % 2 === 1) {
    console.log("ODD");
  } else {
    console.log(i);
  }
}

// Looping over an array. Consider this variable:

// Create a loop that will log the highest number from the array. Expected output --> 67

var nums = [3, 57, -9, 20, 67];
var largest = 0;
for (let i = 0; i < nums.length; i++) {
  if (largest < nums[i]) {
    largest = nums[i];
  }
}
console.log(largest);

// Create a loop that will log the lowest number from the array Expected output --> -9

var smallest = 0;
for (let i = 0; i < nums.length; i++) {
  if (smallest > nums[i]) {
    smallest = nums[i];
  }
}
console.log(smallest);

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] % 2);
}

// Looping over a string. Consider this variable:
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2

var myString = "learn student";
var numberOfEs = 0;
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === "e") {
    numberOfEs++;
  }
}
console.log(numberOfEs);

// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc

for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

// OR YOU CAN MULTIPLY 3 WITH 5 AND GET 15 AND MOD 15 INSTEAD, MAAAATTTTHHHHH!!!

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
