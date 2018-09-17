// update to use default values
function greet(name, greeting){
  greeting = greeting || 'Hello'
  return `${greeting} ${name}`
}

console.log(greet('Roger'))
console.log(greet('Roger', 'Salutations'))

