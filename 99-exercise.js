var winners = [ 'Otis Duncan', 'Melba Frank', 'Damon Adams' ]

function printWinnersByPlace (people) {
  var first = winners[0]
  var rest = winners.slice(1)
  return 'In 1st place is ' + first + '! Followed up by ' + rest.join(' and ') + '.'
}

console.log(printWinnersByPlace(winners))

///////////////////////////////////////////////////////////////////////////////////////

function orderBy (array, key, options) {
  options = options || {}
  
  // create a copy of the array to sort
  var toSort = array.slice()

  if (options.asc) {
    toSort.sort(function (a, b) {
      return a[key] > b[key] ? 1 : -1
    })
  }

  if (options.desc) {
    toSort.sort(function (a, b) {
      return a[key] < b[key] ? 1 : -1
    })
  }

  return toSort
}

const people = [
  { firstName: 'Dustin', lastName: 'French', age: 23 },
  { firstName: 'Norman', lastName: 'Sanders', age: 44 },
  { firstName: 'Jessica', lastName: 'Glover', age: 39 },
  { firstName: 'Alfred', lastName: 'Hicks', age: 31 }
]

console.log(orderBy(people, 'lastName', { desc: true }))