const arr = [1, 3]

function doSomething(item) {
  item
}

// reduce(#1, #2)
// #1 function to reduce
// #2 initial value
const sum = arr.reduce((endResult, item) => item + endResult, 0)
sum
