// regular string concatenation
const name = 'Roger';
console.log('Hello ' + name + '!!');
console.log('1 + 1 = ' + ( 1 + 1 ));

// template strings
console.log(`Hello ${ name } !!`);
console.log(`1 + 1 = ${ 1 + 1 }`);


// exercise
const house = {
  type: 'ranch',
  squareFeet: 1000
};

console.log('This ' + house.type + ' style house has ' + house.squareFeet + ' square feet.')
console.log(`This ${house.type} style house has ${house.squareFeet} square feet.`);
