const person = {
  "firstName": "Law",
  "lastName": "Rence",
  "x1": "one",
  "x2": "two",
  "interests": ["JavsScript","HTML", "CSS"],
  "courses": [{
    "name": "JavaScript",
    "length": 15
  },{
    "name": "HTML",
    "length": 10
  },{
    "name": "CSS",
    "length": 5
  }]
}

/*
console.log('person: ', person);
let x = 1;
console.log(person["x"+x]); // concat as string, returns value of x1
x++;
console.log(person["x"+x]); // concat as string, returns value of x2

console.log('courses prop: length=', person["courses"]["length"]);
*/

/*
const courses = person["courses"];

courses.forEach((course, index)=>{
  console.log(course, ' ', course.name, ' ', course["name"]); // outut: entire object, object name in dot notation, object name in bracket notation
})
*/

/*
for(per in person) {
  console.log(per);
*/  
/*
for(let prop of courses) {
  console.log(prop.name);
}
*/
/*
const keys = Object.keys(person); // gets all keys of an object
keys.forEach((key)=>{
  console.log(key); // output keys of object
})

const vals = Object.values(person);
vals.forEach((val)=>{
  console.log(val);
})
*/

entries = Object.entries(person);
console.log(entries);


//////////////////////////////////////////////////
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// normally: for (int i=0; i++; i<=10) {...}
// expected output: "a"
// expected output: "b"
// expected output: "c"
*/