/* Higher order function */
// → Part 1
const monsters = [
  {
    name: 'Goblin',
    exp: 700,
  },
  {
    name: 'Slime',
    exp: 500,
  },
  {
    name: 'Zombie',
    exp: 300,
  },
  {
    name: 'Dragon',
    exp: 2200,
  },
  {
    name: 'Orc',
    exp: 1400,
  },
  {
    name: 'Maou',
    exp: 3000,
  },
]

// 1. Sum of exp from monsters
// 2. Sum of exp from monsters when promotion, exp * 2
// 3. Sum of exp from monsters when TrueCash, exp * 10
// 4. Sum of exp from monsters when promotio & true cash at the same time, (exp * 2) * 10

// → Part 2
const validateName = validator([required, maxLength(20)]) // → validateName('Rocky Balboa')




/* Recursion */
const monstersWithParent = [
  {
    name: 'Goblin',
    exp: 700,
    parent: 'Orc',
  },
  {
    name: 'Slime',
    exp: 500,
    parent: 'Zombie',
  },
  {
    name: 'Zombie',
    exp: 300,
    parent: 'Orc',
  },
  {
    name: 'Dragon',
    exp: 2200,
    parent: null,
  },
  {
    name: 'Orc',
    exp: 1400,
    parent: 'Dragon',
  },
  {
    name: 'Maou',
    exp: 3000,
    parent: null,
  },
]

const expectedFamilyMonsters = {
  Dragon: {
    Orc: {
      Zombie: {
        Slime: {},
      },
      Goblin: {},
    },
  },
  Maou: {},
}