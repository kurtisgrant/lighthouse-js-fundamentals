function judgeVegetable(veggies, characteristic) {
  let winner = veggies[0]
  for (let veg of veggies) {
    if (veg[characteristic] > winner[characteristic]) {
      winner = veg
    }
  }
  return winner.submitter
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
