const arr = [1, 3, 5, 7, 9]

let sum = 0

// for (#1: counter; #2 condition; #3 post action)
for (let count = 0; count < arr.length; count++) {
  sum = sum + arr[count]
}
sum
