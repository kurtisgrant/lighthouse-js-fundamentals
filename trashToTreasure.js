function smartGarbage(trash, bins) {
  bins[trash] = bins[trash] + 1
  return bins
}

console.log(smartGarbage('waste', {
  waste: 4,
  recycling: 3,
  compost: 5
}))
