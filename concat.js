const concat = function (arr1, arr2) {
  const newArr = []
  for (let n of arr1) {
    newArr.push(n)
  }
  for (let n of arr2) {
    newArr.push(n)
  }
  return newArr
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);