function calculateAiCost(tokensUsed) {
 // Write your code here.
//  console.log(tokensUsed)
if(typeof tokensUsed !== 'number' || tokensUsed < 0){
    return 'Invalid';
}

// if(tokensUsed < 0){
//     return 'Invalid';
// }


if(tokensUsed <=500){
    return 0;
}
const extraToken = tokensUsed - 500;
// console.log( extraToken);
const extraTokenFloor = Math.floor(extraToken / 100);

const rate = extraTokenFloor * 5;

return rate;
}

const result = calculateAiCost(650);
console.log(result);