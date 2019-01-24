const person = { firstname: 'John', lastname: 'Cena' }

function someComplexFunction() {
  return 'firstname'
}
let fullname = ''

for (item in person) {
  fullname = fullname + person[item]
}

fullname
