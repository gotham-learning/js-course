type Game = { name: string, rating: number }

// 1. returns list of name from list of game
const names = (games: Game[]): string[] => []

// 2. returns list of string that has format `<name> [<rating>]` 
// eg. `call of duty [7.4]`
const formatGames = (games: Game[]): string[] => []

// 3. get sum of all the ratings in list of game
const totalRatingsOf = (games: Game[]): number => 0

// 4. get average of all the ratings in list of game
const averageRatingsOf = (games: Game[]): number => 0

// 5. get total rating by name from list of game
const totalRatingsByName = (name: string, games: Game[]): number => 0

// 6. get total rating by name from list of game
const averageRatingsByName = (name: string, games: Game[]): number => 0

// 7. increase rating for all games
const increaseRatingBy = (inc: number, games: Game[]): Game[] => []

// 8. decrease rating for game with specific name
const decreaseRatingBy = (dec: number, name: string, games: Game[]): Game[] => []

// 9. returns game if the name exist else returns undefined
const findByName = (name: string, games: Game[]): Game[] => []

// 10. decrease rating for game that has name in the list
const decreaseRatingForNames = (dec: number, names: string[], games: Game[]): Game[] => []
