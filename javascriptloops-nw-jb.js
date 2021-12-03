// Javascript loops challenge

// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.

for (let i = 1; i < 21; i++) {
    console.log(i);
    
}
// Write a for loop that logs the result of each number from 1 - 20 tripled.

for (let index = 1; index < 21; index++) {
    console.log(index * 3);
    
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
for (let index = 1; index < 21; index++) {
    if(index % 2 === 0){
        console.log(index)
    }   else {
        console.log("ODD")
    }
    
}

var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
var highestNum = 0;
for (let index = 0; index < nums.length; index++) {
    if(highestNum < nums[index]){
        var highestNum = nums[index];
    }
}
console.log(highestNum);

// Create a loop that will log the lowest number from the array Expected output --> -9
var lowestNum = 0;
for (let index = 0; index < nums.length; index++) {
    if(lowestNum > nums[index]){
        var lowestNum = nums[index];
    }
}
console.log(lowestNum);

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
for (let index = 0; index < nums.length; index++) {
    console.log(nums[index] %= 2)
}