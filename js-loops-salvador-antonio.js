// Logging values with for loops

// for (let i = 1; i <= 20; i++){
// console.log(i);
// }
// for (let i = 1; i <= 20; i++){
//     console.log(i * 3);
// }
// for (let i = 1; i <= 20; i++){
//     if (i % 2 !== 0){
//         console.log("ODD");
//     } else {
//         console.log(i);
//     }
// }

// var nums = [-3, -57, -9, -20, -67]
// var maxNum = 0;
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] > maxNum){
//         maxNum = nums[i]
//     }
// }
// console.log(maxNum);

// var nums = [-3, -57, -9, -20, -67, -1]
// var maxNum
// for (let i = 0; i < nums.length; i++){
//     if (maxNum === undefined){
//         maxNum = nums[i]
//     } else if (maxNum < nums[i]){
//         maxNum = nums[i]
//     }
// }
// console.log(maxNum);

//Create a loop that will log the lowest number from the array

// var nums = [3, 57, -9, 20, 67]
// var minNum
// for (let i = 0; i < nums.length; i++){
//     if (minNum === undefined){
//         minNum = nums[i]
//     } else if (minNum > nums[i]){
//         minNum = nums[i]
//     }
// } console.log(minNum);

// Create a loop that will log the remainder of each number when divided by 2
// var nums = [3, 57, -9, 20, 67]
// for(let i=0; i<nums.length; i++){
//   console.log(nums[i]% 2);
//}

//  var myString = "learn student"
//  var count
//  for(let i=0; i < myString.length; i++){
//   if(myString[i] === "e"){
//     //count++;
//       myString[i] = count
//       console.log(count);
//   }
// }

// var myString = "learn student"
// count = 0;
// for(let i=0; i<myString.length; i++){
//     if(myString[i] == "e"){
//         count++;
//     }
// }
// console.log(count);

var myString = "learn student"
var count = 0
for(let i=0; i < myString.length; i++) {

  if(myString[i]==="e"){
    count = count + 1
  }

}//end
console.log(count);























// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc

// for(let i=0; i<=15; i++){
//   if (i % 2 === 0){
//     console.log(`${[i]} is even`);
//   } else if (i % 2 !== 0){
//     console.log(`${[i]} is odd`);
//   }
// }

// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// for(let i=1; i<=100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
// console.log("fizzbuzz");
// } else if(i % 3 === 0){
//   console.log("fizz");
// } else if(i % 5 === 0){
//   console.log("buzz");
// }else {
//   console.log(i);
// }
// }// end
