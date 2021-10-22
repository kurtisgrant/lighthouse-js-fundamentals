const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  const location = [0, 0]
  for (let move of moves) {
    if (move === 'north') location[1]++
    else if (move === 'south') location[1]--
    else if (move === 'west') location[0]--
    else location[0]++
  }
  return location
}

console.log(finalPosition(moves))