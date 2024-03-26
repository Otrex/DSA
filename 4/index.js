function nonRepeating(arr = [1, 1, 2, 3, 3, 4, 4], idx = 0) {
  if (idx >= arr.length) {
    return undefined;
  }

  if (idx === arr.length - 1) {
    return arr[idx];
  }

  if (arr[idx] != arr[idx + 1]) {
    return arr[idx] == arr[idx - 1] ? arr[idx + 1] : (arr[idx]);
  }

  return nonRepeating(arr, idx + 2);
}


console.log(nonRepeating());
console.log(nonRepeating([1, 2, 2]));
console.log(nonRepeating([3, 3, 4, 4, 5]));