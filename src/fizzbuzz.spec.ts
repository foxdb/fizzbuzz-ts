import { fizzbuzz } from './fizzbuzz'

test('returns correct values defined in snapshot', () => {
  const array100 = Array.from(Array(100)).map((e, i) => i + 1)

  expect(array100.map(fizzbuzz)).toMatchSnapshot()
})
