const arr = ['john', 'cena', 'dwayne']

// Imperative
// for(let count = 0; count < arr.length; count++) {
//   arr[count] = arr[count].toUpperCase() //?
// }

// Declarative
// const newArr = []
// arr.forEach(function(item) {
//   newArr.push(item.toUpperCase())
// })
// newArr

const mappedArr = arr.map(function(item) {
  return item.toUpperCase()
})
const mappedArr = arr.map(item => item.toUpperCase())
mappedArr
arr
