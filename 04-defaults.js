// update to use default values added to the param of the function
// function greet(name, greeting = 'Hello'){
//   // greeting = greeting || 'Hello';
//   return `${greeting} ${name}`;
// }

const greet = (name = 'Roger', greeting = 'Hello') => `${greeting} ${name}`;

console.log(greet());
// console.log(greet('Roger', 'Salutations'));
