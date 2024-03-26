
function pascalTriangleIterative(numRows) {
  const triangle = [[1]];

  // Iterate through each row starting from the second row
  for (let row = 1; row < numRows; row++) {
    const newRow = [1];  // Start with 1 for the left edge

    // Calculate elements within the row
    for (let col = 1; col < row; col++) {
      newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
    }

    // Add 1 for the right edge and append the row to the triangle
    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

function recurse(num, arr) {
  cl = [];
}


class Tree {
  nodes = [];

  constructor(value) {
    this.value = value;
  }

  addLeaf(el) {
    this.nodes.push(new Tree(el));
  }
}


console.log(`For 4 =`, pascalTriangleIterative(4))
console.log(`For 5 =`, pascalTriangleIterative(5))
console.log(`For 6 =`, pascalTriangleIterative(6))
