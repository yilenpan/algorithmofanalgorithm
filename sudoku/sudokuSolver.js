// Need to write a validateer that loops through a 3x3 square
// Need to loop through and validate that the vertical is fine
// Need to loop through horizontally to make sure that the line is fine

var validateHorizontal = function (board, row, n) {
  return board[row].indexOf(n) === -1;
};

var validateVertical = function (board, col, n) {
  return board.map(function (row) {
    return row[col];
  }).indexOf(n) === -1;
};

var validate = function (board, row, col, n) {
  return validateVertical(board, col, n) &&
      validateHorizontal(board, row, n) &&
      validateThreeByThree(board, col, row, n);
}

var validateThreeByThree = function (board, col, row, n) {
  var startingCol = Math.floor(col / 3) * 3;
  var endingCol = startingCol + 3;
  var startingRow = Math.floor(row / 3) * 3;
  var endingRow = startingRow + 3;
  while (startingRow < endingRow) {
    var currentCol = startingCol;
    while (currentCol < endingCol) {
      if (board[startingRow][currentCol] === n) {
        return false;
      }
      currentCol++;
    }
    startingRow++;
  }
  return true;
};


var boardComplete = function (board) {
  return board.every(function (row) {
    return row.every(function (col) {
      return col !== ' ';
    });
  });
};

var solver = function (board) {
  // If all the spaces on the board have been filled
  // return the board
  if (boardComplete(board)) {
    return board;
  }
  // Otherwise, loop through all the squares in the matrix
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[0].length; col++) {
      // When you come to an empty square
      if (board[row][col] === ' ') {
        // Loop through from 1 - 9
        for (var n = 1; n < 10; n++) {
          // If you can place the number at board[row][col]
          if (validate(board, row, col, n)) {
            // set the number
            board[row][col] = n;
            // recurse on the new board
            var result = solver(board.slice());
            // if you get a result, return the result
            if (result) {
              return result;
            }
            // otherwise turn the square off
            board[row][col] = ' ';
          }
        }
        // if you finish looping through the numbers, return false to end this path
        return false;
      }
    }
  }
};

module.exports = solver;
