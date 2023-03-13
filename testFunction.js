// prevent hoise function
// myInfo("Jill");
// myInfo = function(name) {
//     console.log('Hello ' + name);
// };
// myInfo("Jill");

// short Arrow function

const myInfo = name => console.log('Hello ' + name);
myInfo("Jill");

const info = name => console.log('Hello ' + name);
info("jack");

const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));

const myFunction = (a, b) => a * b;

let x = myFunction(5, 3);
let y = x;
console.log(x);