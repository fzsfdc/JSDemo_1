const arr1 = ["one","two","three"]
console.log('init: ', arr1);

let arr1ret = arr1.push("FOUR"); // adds param at last pos.
// console.log(arr1ret);
console.log('push: ', arr1);

arr1.unshift("FIVE"); // adds param a first pos
// console.log(arr1ret);
console.log('unshift: ', arr1);

arr1ret = arr1.pop(); // takes and removes last value
console.log('arr1ret-pop: ', arr1ret);
console.log('pop: ', arr1);

arr1ret = arr1.shift(); // takes and removes first value
console.log('arr1ret-shift: ', arr1ret);
console.log('shift: ', arr1);