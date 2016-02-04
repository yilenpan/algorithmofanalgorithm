/////////////////////////////////////////////////////////////
// LARGEST CONTIGUOUS SUM
// -----------------------------------------
// If all numbers in the array are positive, we can safely assume
// the largest contiguous sum of numbers would be the entire array
// however, with negative numbers, if the runningCount dips below
// 0, we can assume that any sum made after that number would be
// less than the max.
//
// We can then safely reset the runningCount to 0 every time
// the running count runs below 0.
/////////////////////////////////////////////////////////////



var largestContiguousSum = function (array) {
  var runningCount = 0;
  // By initializing maxCount to -Infinity, we
  // can ensure that any number in the array will be larger
  var maxCount = -Infinity;
  array.forEach(function (numbers) {
    runningCount += numbers;
    if (runningCount < 0) {
      runningCount = 0;
    }
    maxCount = Math.max(runningCount, maxCount);
  });
  return maxCount;
};


var array = [10,22,3,4,-5,23,-100,5];
console.log(largestContiguousSum(array));
