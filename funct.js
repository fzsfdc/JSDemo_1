function add(a,b) {
  return a + b;
}
//add(2,3);
//console.log('test');
console.log('call add:', add(2,3));

let sum = add; // Create a reference sum to add
console.log('call sum: ', sum(30,40)); 

let sum1 = add(10,20);
console.log('sum1: ', sum1);


