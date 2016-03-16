
/////////////////////////////////////////////////////////////
// SNAKE TRAVERSAL
// ----------------------------------
// Write a function that takes a 2d matrix and traverses it in a zig zag motion
// such that...
//
// matrix = [[1,2,3],
//           [4,5,6],
//           [7,8,9]]
//
// snakeTraversal(matrix) => 1, 4, 2, 3, 5, 7, 8, 6, 9
//
//
/////////////////////////////////////////////////////////////



function snakeTraversal (matrix, result, row, col, up) {
  // init
  result = result || [];
  // if up is true, pointer traverses up and to the right
  // otherwise it traverses down and to the left
  up = up === undefined ? false : up;
  row = row === undefined ? 0 : row;
  col = col === undefined ? 0 : col;

  // basecase: if results.length = all the items in the matrix
  // we know we have traversed the entire matrix
  if (result.length === matrix[0].length * matrix.length) {
    return result;
  }

  // if we hit the left wall on an even row, and not bottom
  if (col === 0 && row % 2 === 0 && row < matrix.length - 1) {
    // move down one
    return snakeTraversal(matrix, result.concat(matrix[row][col]), row + 1, col, true);
  }

  // if we hit the top on a odd col, and not right wall
  if (row === 0 && col % 2 === 1 && col < matrix[0].length - 1) {
    // move one to the right
    return snakeTraversal(matrix, result.concat(matrix[row][col]), row, col + 1, false);
  }

  // if moving up, move up and to the right
  if (up) {
    // if right wall
    if (col === matrix[0].length - 1) {
      // move down one
      return snakeTraversal(matrix, result.concat(matrix[row][col]), row + 1, col, false);
    }
    // otherwise keep moving up
    return snakeTraversal(matrix, result.concat(matrix[row][col]), row - 1, col+1, true);
  // if moving down, move down to the left
  } else {
    // if bottom
    if (row === matrix.length - 1) {
      // move one to the right
      return snakeTraversal(matrix, result.concat(matrix[row][col]), row, col + 1, true);
    }
    // else keep moving down
    return snakeTraversal(matrix, result.concat(matrix[row][col]), row + 1, col - 1, false);
  }

}

/////////////////////////////////////////////////////////////
// TEST CASES
/////////////////////////////////////////////////////////////


var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]];

var matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]];

var matrix2 = [[1,2,3],
               [4,5,6],
               [7,8,9]]; //1, 4, 2, 3, 5, 7, 8, 6, 9

console.log(JSON.stringify(snakeTraversal(matrix1)) === JSON.stringify([1, 4, 2, 3, 5, 7, 10, 8, 6, 9, 11, 12]));
console.log(JSON.stringify(snakeTraversal(matrix)) === JSON.stringify([1, 5, 2, 3, 6, 9, 13, 10, 7, 4, 8, 11, 14, 17, 18, 15, 12, 16, 19, 20]));
