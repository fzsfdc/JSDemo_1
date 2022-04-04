const arr1 = ['one','string',100,false,[]];
console.log('arr1:', arr1[2]);
arr1[2] = 'test';
arr1[100] = 100;
console.log('arr1:', arr1);

//arr1.lenght = 0;
//console.log(arr1);

const arr2 = arr1;
console.log('arr2:', arr2[3]);
arr2[4] = 'new value';
console.log('arr2[4]:', arr2[4]);


console.log('sum-arr1:', arr1);
console.log('sum-arr2:', arr2);

const arr3 = [];
arr1.forEach((ele,ind) => {
  console.log('arr1-ele: ', ele);
  arr3[ind] = ele; 
});
console.log('arr3-b4change' , arr3);
arr3[4] = "changed";
console.log('arr3-postchange' , arr3);

arr1.push('push value')

console.log('sum-arr1:', arr1);
console.log('sum-arr2:', arr2);
console.log('sum-arr3:', arr3);