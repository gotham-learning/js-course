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


/* Closure */
const fibo = x => x <= 1 ? x : fibo(x - 1) + fibo(x - 2)

const time = f => {
  const start = performance.now()
  f()
  const end = performance.now()
  return `${(end - start).toFixed(2)} ms`
}

time(() => fibo(30)) //?
time(() => fibo(31)) //?

const makeFibo = () => {
  const cache = {}
  function fibo(x) {
    return x <= 1 ? x : fibo(x - 1) + fibo(x - 2)
  }
  return fibo
}

/* Class vs Closure */
class Dragon {
  constructor(element) {
    this.element = element
  }
  setElement (newElement) {
    this.element = newElement
  }
  split() {
    return this.element
  }
}

const makeDragon = (inputElement) => {
  let element = inputElement

  return {
    setElement(newElement) {
      element = newElement
    },
    split() {
      return element
    }
  }
}



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
