/////////////////////////////////////////////////////////////
// Rotated Binary Search
// ----------------------------------------------------------
// A binary search algorithm is reliant on a sorted array
// however, in a rotated sorted array, an unknown number of
// elements have been shifted off the end and put in front.
//
// This means that if we slice the array in half, we can
// determine if 'half' an array is sorted by checking to see
// if the begining of the half is smaller than it's end.
//
// if it is sorted, then we discard it and recurse the unsorted
// half up.
// We keep doing that until there are just two items in the array.
// if it's the pivot, we return that item
/////////////////////////////////////////////////////////////

var findPivot = function (array, start, end) {
  start = start || 0;
  end = end || array.length - 1;
  var mid = Math.floor((end - start) / 2) + start;
  // When start and end are next to each other
  if (start === mid) {
    // in a pivot, the item at index 'end' will always
    // be smaller thant the item at index 'start'
    return array[start] > array[end] ? start : null;
  }
  if (array[start] < array[mid]) {
    return findPivot(array, mid, end);
  } else {
    return findPivot(array, start, mid);
  }
};

/////////////////////////////////////////////////////////////
// TEST CASES
/////////////////////////////////////////////////////////////

var tests = [{
  inputs: [3,4,5,6,7,1,2],
  expected: 4
}, {
  inputs: [4,5,6,7,8,1,2,3],
  expected: 4
}, {
  inputs: [4,5,6,7,8],
  expected: null
}, {
  inputs: [9,4,5,6,7,8],
  expected: 0
}, {
  inputs: [4,5,6,1,2,3],
  expected: 2
}];

var tester = function (testCase, functionToTest) {
  var testResult = functionToTest(testCase.inputs);
  return expectToBeEqual(testResult, testCase.expected);
};

var expectToBeEqual = function (a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

tests.forEach(function (test) {
  console.log('input: ', test.inputs);
  console.log('expected: ', test.expected);
  console.log(tester(test, findPivot));
});
