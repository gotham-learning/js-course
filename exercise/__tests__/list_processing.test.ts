import {
  gameList,
  names,
  formatGames,
  totalRatingsOf,
  averageRatingsOf,
  ratingByName,
  averageRatingsByName,
  increaseRatingBy,
  decreaseRatingBy,
  findByName,
  decreaseRatingForNames,
} from '../list_processing'

test('names', () => {
  expect(names(gameList)).toEqual([
    'call of duty',
    'assassin creed',
    'call of duty',
    'mario',
  ])
})

test('formatGames', () => {
  expect(formatGames(gameList)).toEqual([
    'call of duty [4]',
    'assassin creed [6.4]',
    'call of duty [6]',
    'mario [10.2]',
  ])
})

test('totalRatingsOf', () => {
  expect(totalRatingsOf(gameList)).toBe(26.6)
})
test('averageRatingsOf', () => {
  expect(averageRatingsOf(gameList)).toBe(6.65)
})
test('ratingByName', () => {
  expect(ratingByName('call of duty', gameList)).toBe(10)
})
test('averageRatingsByName', () => {
  expect(averageRatingsByName('call of duty', gameList)).toBe(5)
})
test('increaseRatingBy', () => {
  expect(increaseRatingBy(3, gameList)).toEqual([
    { name: 'call of duty', episode: 1, rating: 7.0 },
    { name: 'assassin creed', episode: 1, rating: 9.4 },
    { name: 'call of duty', episode: 2, rating: 9.0 },
    { name: 'mario', episode: 1, rating: 13.2 },
  ])
})
test('decreaseRatingBy', () => {
  expect(decreaseRatingBy(3, 'call of duty', gameList)).toEqual([
    { name: 'call of duty', episode: 1, rating: 1.0 },
    { name: 'call of duty', episode: 2, rating: 3.0 },
  ])
})
test('findByName', () => {
  expect(findByName('call of duty', gameList)).toEqual({
    name: 'call of duty',
    episode: 1,
    rating: 4.0,
  })
  expect(findByName('dude', gameList)).toBe(undefined)
})
test('decreaseRatingForNames', () => {
  expect(
    decreaseRatingForNames(3, ['call of duty', 'assassin creed'], gameList),
  ).toEqual([
    { name: 'call of duty', episode: 1, rating: 1.0 },
    { name: 'assassin creed', episode: 1, rating: 3.4 },
    { name: 'call of duty', episode: 2, rating: 3.0 },
  ])
})
