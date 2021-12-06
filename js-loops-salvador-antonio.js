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

var nums = [-3, -57, -9, -20, -67, -1]
var maxNum
for (let i = 0; i < nums.length; i++){
    if (maxNum === undefined){
        maxNum = nums[i]
    } else if (maxNum < nums[i]){
        maxNum = nums[i]
    }
}
console.log(maxNum);