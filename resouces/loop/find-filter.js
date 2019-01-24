const arr = [
  {
    name: 'Ham',
    age: 25,
  },
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Poon',
    age: 18,
  },
  {
    name: 'Pang',
    age: 19,
  },
]

let result = arr.find(function(item){
  return item.name === 'Poon'
})

const filterResult = arr.filter(function (item) {
  return item.age <= 20
})

filterResult
result
