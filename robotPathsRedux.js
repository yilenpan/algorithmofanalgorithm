
var range = function (n, elm) {
  var out = [];
  for (var i = 0; i < n; i++) {
    if (Array.isArray(elm)) {
      out.push(elm.slice());
    } else {
      out.push(elm);
    }
  }
  return out;
};

var outOfBounds = function(n, row, col) {
  return n > row && n > col && row > 0 && col > 0;
};

var robotPathsRedux = function (board, n, row, col) {
  if (row === n - 1 && col === n - 1) {
    return 1;
  }
  if (board[row][col] || outOfBounds(n, row, col)) {
    return 0;
  }
  board[row][col] = true;
  return robotPathsRedux(board.slice(), row + 1, col) +
         robotPathsRedux(board.slice(), row - 1, col) +
         robotPathsRedux(board.slice(), row, col + 1) +
         robotPathsRedux(board.slice(), row, col - 1);
};

robotPathsRedux(range(5, range(5, false)), 5, 0, 0);
