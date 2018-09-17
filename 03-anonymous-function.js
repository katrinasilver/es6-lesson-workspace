// function definition
// function add(a,b){
//   return a + b;
// }

// function expression
// const add = function(a,b){
//   return a +b
// }

// fat arrow function
const add = (a, b) => {
  return a + b;
};

// Implied return - no curly braces, a + b after the fat arrow is what the function is returning
// const add = (a , b) => a + b

console.log(add(5,5));


// no function parameters parenthesis needed if only one parameter
// const greet = name => `Hello ${name}`

// console.log(greet('Roger'))
