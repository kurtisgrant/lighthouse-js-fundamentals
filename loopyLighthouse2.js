
const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    const multOne = i % multiples[0] === 0
    const multTwo = i % multiples[1] === 0

    if (multOne && multTwo) console.log(words[0] + words[1])
    else if (multOne) console.log(words[0])
    else if (multTwo) console.log(words[1])
    else console.log(i)
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
