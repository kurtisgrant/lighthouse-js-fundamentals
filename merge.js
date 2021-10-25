const merge = function (arr1, arr2) {
  const newArr = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) newArr.push(arr1.shift())
    else newArr.push(arr2.shift())
  }
  const stillArr = arr1.length > 0 ? arr1 : arr2
  for (let i = 0; i < stillArr.length; i++) {
    newArr.push(stillArr[i])
  }
  return newArr
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);