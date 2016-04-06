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
  // TODO: Solve me
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
