const assert = require('assert');
/* *
* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
* The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
* You must write an algorithm that runs in O(n) time and without using division operation.
* */


function calcProducts(arr = [1,2,3,4]) {
  const answer = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    // console.log({ answer, product, d: 1 })

    answer[i] = product;
    product *= arr[i];

    console.log({ answer, product, d: 1 })
  }

  console.log("Boundary....")

  product = 1
  for (let i = (arr.length - 1); i >= 0; i--) {
    // console.log({ answer, product, d: 2 })

    answer[i] *= product;
    product *= arr[i];

    console.log({ answer, product, d: 2 })
  }

  return answer
}


console.log(calcProducts())