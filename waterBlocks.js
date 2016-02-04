/////////////////////////////////////////////////////////////
// Water Blocks
// ---------------------------------------------------------
// Most problems that involve a linear time operation on an array
// can be solved using a greedy solution.
// Essentially, greedy solutions are used to 'carry' a value
// as the program iterates through a list.
//
// EX: finding the max of an array is as simple as iterating
// through the array and carrying a maxValue (init to firstElm in array)
// if there is another item bigger than maxValue, set maxValue
// to this item
//
// In this solution of water blocks, we have to keep track of three things
// the 'right max' the 'left max' and the 'count' which is a
// running sum of all the differences between the 'maxes' and the lower
// block.
//
// We then begin our iteration. We initialize the left max to the
// first element in the array and the right max to the last element
// the array. Then we walk the right and left pointers
// through the array in one at a time, keeping track
// of each 'max' value, and calculating the 'count'.
//
// To avoid any duplcation of blocks, we set our program
// termination to be the point when left and right pointers meet.
/////////////////////////////////////////////////////////////

var waterBlocks = function (blocks) {
  var start = 0;
  var end = blocks.length - 1;
  var count = 0;
  var maxLeft = blocks[start];
  var maxRight = blocks[end];

  while (start !== end) {
    if (maxLeft < maxRight) {
      start++;
      if (blocks[start] < maxLeft) {
        count += maxLeft - blocks[start];
      }
      maxLeft = Math.max(maxLeft, blocks[start]);
    } else {
      end--;
      if (blocks[end] < maxRight) {
        count += maxRight - blocks[end];
      }
      maxRight = Math.max(maxRight, blocks[end]);
    }
  }
  return count;
};

//////////////////////////////////////////////////
// TEST CASES
//////////////////////////////////////////////////

console.table(blockVisualizer([1,5,2,3,5,6]));
console.log(waterBlocks([1,5,2,3,5,6]));


//////////////////////////////////////////////////
// MATRIX BUILDER
//////////////////////////////////////////////////

function buildBlocks (n) {
  var col = [];
  for (var i = 0; i < n; i++) {
    col.push('#');
  }
  return col;
}

function pluck (array, prop) {
  return array.map(function (item) {
    return item[prop] || ' ';
  });
}

function rotate (matrix) {
  var newMatrix = [];
  var maxLen = matrix.reduce(function (height, col) {
    return Math.max(height, col.length);
  }, 0);
  for (var i = 0; i < maxLen; i++) {
    newMatrix.unshift(pluck(matrix, i));
  }
  return newMatrix;
}

function blockVisualizer (array) {
  return rotate(array.reduce(function (matrix, blocks) {
    return matrix.push(buildBlocks(blocks)), matrix;
  }, []));
}

/////////////////////////////////////////////////////////////
// WHITE BOARD
// Ex:
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 1
//  | ###########   rMax = 1
//   ------------   count = 0
//    ^         ^
//    l         r (init right and left)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 1
//  | ###########   rMax = 2 (new)
//   ------------   count = 0
//    ^        ^
//    l        r (start with the right pointer and walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 2 (new)
//  | ###########   rMax = 2
//   ------------   count = 0
//     ^       ^
//     l       r (left is less than right so walk forward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 2
//  | ###########   rMax = 3 (new)
//   ------------   count = 0
//     ^      ^
//     l      r (left === right so walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 2
//  | ###########   rMax = 3 (new)
//   ------------   count = 1 (l is 1 less than lMax)
//      ^     ^
//      l     r (left < right so walk forward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3 (new)
//  | ###########   rMax = 3
//   ------------   count = 1
//       ^    ^
//       l    r (left < right so walk forward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3
//  | ###########   rMax = 3
//   ------------   count = 2 (r is 1 less than rMax)
//       ^   ^
//       l   r (left == right so walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3
//  | ###########   rMax = 3
//   ------------   count = 3 (r is 1 less than rMax)
//       ^  ^
//       l  r (left > right so walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3
//  | ###########   rMax = 3
//   ------------   count = 3
//       ^ ^
//       l r (left > right so walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3
//  | ###########   rMax = 4
//   ------------   count = 3
//       ^^
//       lr (left == right so walk backward)
//
//  |     #
//  |    ###  #
//  |  # #######    lMax = 3
//  | ###########   rMax = 4
//   ------------   count = 3
//        ^
//        lr (left and right meet so  so walk backward)
//
//
/////////////////////////////////////////////////////////////
