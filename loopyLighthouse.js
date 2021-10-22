const [start, end] = [100, 200]

for (let i = start; i <= end; i++) {
  const divThree = i % 3 === 0
  const divFour = i % 4 === 0

  if (divThree && divFour) console.log("LoopyLighthouse")
  else if (divThree) console.log("Loopy")
  else if (divFour) console.log("Lighthouse")
  else console.log(i)
}