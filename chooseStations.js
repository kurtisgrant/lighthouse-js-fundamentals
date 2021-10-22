const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]
// stations = [
//   ['A', 10, 'school'],
//   ['B', 9, 'restaurant'],
//   ['C', 21, 'community centre'],
//   ['D', 15, 'school'],
//   ['E', 50, 'restaurant'],
//   ['F', 20, 'school'],
//   ['G', 40, 'community centre'],
//   ['H', 50, 'school'],
// ]
// let stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 10, 'community centre']
// ]


const chooseStations = function (stations) {
  const goodStations = []
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) goodStations.push(station[0])
  }
  return goodStations
}

console.log(chooseStations(stations))