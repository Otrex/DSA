/**
-----------------
    Question:
-----------------
Given an array of integers, find all the "leaders" in the array. An element is considered a "leader" if all the elements to its right are greater than or equal to it. Write a function or algorithm to find and return all the leaders in the given array.

Example:
Input: [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]

In this example, the elements 17, 5, and 2 are considered leaders because all the elements to their right are greater than or equal to them.

*/

// el is leader if els to the right >= el

const input = [16, 17, 4, 18, 3, 5, 2];
const output = [17, 5, 2];

function getLeaders(arr = []) {
  const leaders = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) break

      if (j == arr.length - 1) {
        leaders.push(arr[i]);
      }
    }
  }

  return leaders;
}


console.log(getLeaders(input)); // O(n^2)