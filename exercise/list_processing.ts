export type Game = {
  name: string
  rating: number
  episode: number | undefined
}

export const gameList: Game[] = [
  { name: 'call of duty', episode: 1, rating: 4.0 },
  { name: 'assassin creed', episode: 1, rating: 6.4 },
  { name: 'call of duty', episode: 2, rating: 6.0 },
  { name: 'mario', episode: 1, rating: 10.2 },
]

// 1. returns list of name from list of game
export const names = (games: Game[]): string[] => []

// 2. returns list of string that has format `<name> [<rating>]`
// eg. `call of duty [7.4]`
export const formatGames = (games: Game[]): string[] => []

// 3. get sum of all the ratings in list of game
export const totalRatingsOf = (games: Game[]): number => 0

// 4. get average of all the ratings in list of game
export const averageRatingsOf = (games: Game[]): number => 0

// 5. get total rating by names from list of game
export const ratingByName = (names: string, games: Game[]): number => 0

// 6. get total rating by names from list of game
export const averageRatingsByName = (names: string, games: Game[]): number => 0

// 7. increase rating for all games
export const increaseRatingBy = (inc: number, games: Game[]): Game[] => []

// 8. decrease rating for game with specific name
export const decreaseRatingBy = (
  dec: number,
  name: string,
  games: Game[],
): Game[] => []

// 9. returns game if the name exist else returns undefined
export const findByName = (name: string, games: Game[]): Game | undefined =>
  undefined

// 10. decrease rating for game that has name in the list
export const decreaseRatingForNames = (
  dec: number,
  names: string[],
  games: Game[],
): Game[] => []

/* Solution */

// Utils
const containsIn = <T>(list: T[]) => (value: any): boolean =>
  list.indexOf(value) >= 0
const operateWithFloatBy = (f: Function) => (...args) =>
  Number(f(...args).toFixed(2))
const add = (a: number, b: number): number => a + b
const subtract = (a: number, b: number): number => a - b
const addFloat = operateWithFloatBy(add)
const subtractFloat = operateWithFloatBy(subtract)

// // 1. returns list of name from list of game
// export const names = (games: Game[]): string[] => games.map(({ name }) => name)

// // 2. returns list of string that has format `<name> [<rating>]`
// // eg. `call of duty [7.4]`
// export const formatGames = (games: Game[]): string[] =>
//   games.map(({ name, rating }) => `${name} [${rating}]`)

// // 3. get sum of all the ratings in list of game
// export const totalRatingsOf = (games: Game[]): number =>
//   games.reduce((result, { rating }) => addFloat(result, rating), 0)

// // 4. get average of all the ratings in list of game
// export const averageRatingsOf = (games: Game[]): number =>
//   totalRatingsOf(games) / games.length

// // 5. get total rating by name from list of game
// export const ratingByName = (name: string, games: Game[]): number =>
//   totalRatingsOf(games.filter(game => game.name === name))

// // 6. get average rating by name from list of game
// export const averageRatingsByName = (name: string, games: Game[]): number =>
//   averageRatingsOf(games.filter(game => game.name === name))

// // 7. increase rating for all games
// export const increaseRatingBy = (inc: number, games: Game[]): Game[] =>
//   games.map(game => ({ ...game, rating: addFloat(game.rating, inc) }))

// // 8. decrease rating for game with specific name
// export const decreaseRatingBy = (
//   dec: number,
//   name: string,
//   games: Game[],
// ): Game[] =>
//   games
//     .filter(game => game.name === name)
//     .map(game => ({ ...game, rating: game.rating - dec }))

// // 9. returns game if the name exist else returns undefined
// export const findByName = (name: string, games: Game[]): Game | undefined =>
//   games.find(game => game.name === name)

// // 10. decrease rating for game that has name in the list
// export const decreaseRatingForNames = (
//   dec: number,
//   names: string[],
//   games: Game[],
// ): Game[] =>
//   games
//     .filter(({ name }) => containsIn(names)(name))
//     .map(game => ({ ...game, rating: subtractFloat(game.rating, dec) }))
