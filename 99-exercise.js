const winners = [ 'Otis Duncan', 'Melba Frank', 'Damon Adams' ];

// function printWinnersByPlace (people) {
//   const first = winners[0];
//   const rest = winners.slice(1);
//   // return 'In 1st place is ' + first + '! Followed up by ' + rest.join(' and ') + '.'
//   return `In 1st pace is ${first}! Followed by ${rest.join(' and ')}.`;
// }

const printWinnersByPlace = (people) => {
  const first = winners[0];
  const rest = winners.slice(1);
  // return 'In 1st place is ' + first + '! Followed up by ' + rest.join(' and ') + '.'
  return `In 1st pace is ${first}! Followed by ${rest.join(' and ')}.`;
}

console.log(printWinnersByPlace(winners));

///////////////////////////////////////////////////////////////////////////////////////

// function orderBy(array, key, options = options || {}) {

//   // create a copy of the array to sort
//   const toSort = array.slice();

//   if (options.asc) {
//     toSort.sort( (a, b) => {
//       return a[key] > b[key] ? 1 : -1;
//     });
//   }

//   if (options.desc) {
//     toSort.sort( (a, b) => {
//       return a[key] < b[key] ? 1 : -1;
//     });
//   }
//   return toSort;
// }

const orderBy = (array, key, options = {}) => {
  // create a copy of the array to sort
  const toSort = array.slice();
  if (options.asc) {
    toSort.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }

  if (options.desc) {
    toSort.sort((a, b) => a[key] < b[key] ? 1 : -1);
  }
  return toSort;
};

const people = [
  { firstName: 'Dustin', lastName: 'French', age: 23 },
  { firstName: 'Norman', lastName: 'Sanders', age: 44 },
  { firstName: 'Jessica', lastName: 'Glover', age: 39 },
  { firstName: 'Alfred', lastName: 'Hicks', age: 31 }
]

console.log(orderBy(people, 'lastName', { desc: true }));
