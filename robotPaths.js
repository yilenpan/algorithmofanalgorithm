/////////////////////////////////////////////////////////////
// Robot Paths
// ----------------------------------
// Given a matrix, you can move right, or down.
// how many paths will it take for a robot to go from
// the top left corner to the bottom right corner?
//
// EXTRA CREDIT:
// Solve this with dynamic programming
/////////////////////////////////////////////////////////////


var countPaths = function (matrix, row, col) {
  row = row || 0;
  col = col || 0;
  var maxRow = matrix.length;
  var maxCol = matrix[0].length;
  var count = 0;
  if (row === maxRow - 1 && col === maxCol - 1) {
    return 1;
  } else {
    if (row + 1 < maxRow) {
      count += countPaths(matrix, row + 1, col);
    }
    if (col + 1 < maxCol) {
      count += countPaths(matrix, row, col + 1);
    }
  }
  return count;
};


var countPathsDynamic = function (n, m) {
  m = m || n;
  var matrix = range(n, range(m, 0));
  matrix[0].forEach(function (col, i) {
    matrix[0][i] = 1;
  });
  matrix.forEach(function (row) {
    row[0] = 1;
  });

  for (var row = 1; row < matrix.length; row++) {
    for (var col = 1; col < matrix[0].length; col++) {

      var above = matrix[row][col - 1];
      var left = matrix[row - 1][col];
      matrix[row][col] = above + left;
    }
  }
  return matrix[n - 1][m - 1];
};

/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var testCase = range(5, range(5, true));
console.log(countPathsDynamic(5,5) === 70);
console.log(countPaths(testCase) === 70);

/////////////////////////////////////////////////////////////
// HELPERS
/////////////////////////////////////////////////////////////


function range (n, elm) {
  var out = [];
  for (var i = 0; i < n; i++) {
    if (Array.isArray(elm)) {
      out.push(elm.slice());
    } else {
      out.push(elm);
    }
  }
  return out;
}

function pluck (arr, prop) {
  return arr.map(function (item) {
    return item[prop];
  });
}
