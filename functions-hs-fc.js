// const choosePet = () => {
//   return "Animal type is chosen.";
// }

// console.log(choosePet());

const choosePet = (animalType) => {

    return `You chose a ${animalType} to rescue. `
}

console.log(choosePet("dog"));
console.log(choosePet("cat"));
console.log(choosePet("bird"));
console.log(choosePet("lizard"));



// const rescuePets = (animalType, rescueFee) => {
//     if(animalType === 1){
//       return`You chose to rescue a $(animalType).`
//     }
//     else if (animalBreed) {
//
//     }
// }
//
// console.log(rescuePets(""));
//
//
// if (quantity === 1) {
//      // return string interporlation w/ donutType and $1
//    return `1 ${donutType} donut will cost you $1`;
//  } else if (quantity === 12) {
//
//    return `A dozen ${doughType} donuts will cost you $10 `;
//  }
//  //   upt to 11 donuts the price is $1 per donut
//  else if (quantity < 12) {
//    // not hard coding `10 jelly donuts will cost you $10`;
//    // return string interporlation w/ donutType and $1 per quantity
//    return `${quantity} ${donutType} donuts will cost you $${quantity}`;
//  } else {
//    return " hey thats a lot of donuts or something went wrong!";
//  }
// }
// var boston = "Boston Creme"
//
// console.log(donutShop("glazed", 1));
// console.log(donutShop("jelly", 10));
// console.log(donutShop(boston, 12));
