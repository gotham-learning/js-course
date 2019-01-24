// 99% of the times use `===`
// except to verify is empty using `x == null`

function doSomething (input) {
  if (input == null) {
    console.log("Is empty")
  } else {
    console.log("Not empty")
  }
}

const a = undefined
doSomething(a)