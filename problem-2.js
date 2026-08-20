function isElevatorSafe(weights) {
  // Write your code here
//   console.log(weights);
if(Array.isArray(weights)===false){
    return "Invalid";
}

let total =0;
for(let item of weights){
    total += item;
}
if(total<=400){
    return true;
}else{
    return false;
}
return total;
}

const result = isElevatorSafe([60, 75, 50]

);
console.log(result);