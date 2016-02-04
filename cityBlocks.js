//////////////////////////////////////////////////
// SOLUTION CODE
//////////////////////////////////////////////////
// To visualize, copy code into chrome console
//////////////////////////////////////////////////

// Optimal Meeting Point Algorithm:
//
// O(n) solution - iterate over the entire matrix - when we encounter
// people, we keep a running median of the row and col.
// At the end of the matrix, we return out the median row, and the median col
//
var getOptimalMeetingPoint = function (matrix) {
  // init runningRow and runningCol and peopleCount
  var runningRow = 0;
  var runningCol = 0;
  var peopleCount = 0;

  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[0].length; col++) {
      // if there are people on the corner
      if (matrix[row][col] !== 0) {
        // add row * number of people on that corner
        runningRow += row * matrix[row][col];
        // add col * number of people on that corner
        runningCol += col * matrix[row][col];
        // add number of people to the running peopleCount
        peopleCount += matrix[row][col];
      }
    }
  }
  // calculate the position in the matrix
  matrix[Math.round(runningRow / peopleCount)][Math.round(runningCol / peopleCount)] = 'X';
  return matrix;
};


//////////////////////////////////////////////////
// TEST CASES
//////////////////////////////////////////////////
range(10, 0).map(function () {
  return buildMatrix(9, 15);
}).forEach(function (matrix) {
  console.table(getOptimalMeetingPoint(matrix));
});

//////////////////////////////////////////////////
// MATRIX BUILDER
//////////////////////////////////////////////////

// Returns an array of rowSize length, populated with elm
function range (rowSize, elm) {
  var result = [];
  for (var i = 0; i < rowSize; i++) {
    if (Array.isArray(elm)) {
      result.push(elm.slice());
    } else {
      result.push(elm);
    }
  }
  return result;
}

// randomize takes a matrix, it's size, number of random elms and elms
function randomize (matrix, size, num) {
  if (num === 0) {
    return matrix;
  } else if (num > size * size) {
    return "Number exceeds size of matrix";
  }

  // generate random row and col
  var row = Math.floor(Math.random() * (size - 1));
  var col = Math.floor(Math.random() * (size - 1));
  // generate random number of citizens on square
  var elm = Math.floor(Math.random() * 5);

  // If we haven't placed a person at that coord, set a person on that coord,
  // decrement num, then recurse up.
  if (matrix[row][col] !== 0) {
    return randomize(matrix.slice(), size, num);
  } else {
    matrix[row][col] = elm;
    return randomize(matrix.slice(), size, num - 1);
  }
};

// builds 2d array where num is the number of random pieces on the board
function buildMatrix (size, num) {
  return randomize(range(size, range(size, 0)).slice(), size, num);
};
