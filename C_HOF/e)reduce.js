let nums = [10, 20, 30];
let total = nums.reduce((acc, num) => acc + num, 0); 
// acc = accumulator, num = current item, 0 = start value
console.log(total); // 60