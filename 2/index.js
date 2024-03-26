function print(str) {
  console.log(str);
}



function no_of_identical_twins(arr) {
  obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let count = 0;
  Object.entries(obj).forEach(([key, f]) => {
    count += Math.trunc((f * (f - 1) )/ 2 );
  });

  return count;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i < j && arr[i] === arr[j]) {
  //       count++;
  //     }
  //   }
  // }

  return count
}



print(`[1, 2, 3, 2, 1] ===> ${no_of_identical_twins([1, 2, 3, 2, 1])}`)
print(`[1, 2, 2, 3, 2, 1] ===> ${no_of_identical_twins([1, 2, 2, 3, 2, 1])}`)
print(`[1, 1, 1, 1] ===> ${no_of_identical_twins([1, 1, 1, 1])}`)