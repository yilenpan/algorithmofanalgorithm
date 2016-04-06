var knightPaths = function (row, col, m) {
  if (row < 0 || row >= 8 || col < 0 || col >= 8) {
    return 0;
  }
  if (m === 0) {
    return 1;
  }
  return knightPaths(row - 2, col - 1, m - 1) +
         knightPaths(row - 2, col + 1, m - 1) +
         knightPaths(row - 1, col + 2, m - 1) +
         knightPaths(row + 1, col + 2, m - 1) +
         knightPaths(row - 1, col - 2, m - 1) +
         knightPaths(row + 1, col - 2, m - 1) +
         knightPaths(row + 2, col + 1, m - 1) +
         knightPaths(row + 2, col - 2, m - 1);
};

/*
  up two, right one
  up two, left one
  right two, up one
  right two, down one
  left two, up one
  left two, down one
  down two, right one
  down two, left one
*/
