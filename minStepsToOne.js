/*
  On a positive int, you can perform 3 steps:
    1. Subtract 1 from it
    2. if it's divisible by 2, divide by 2
    3. if it's divisible by 3, divide by 3
    4. return min steps to 1

    10 -> 3
    9
    3
    1

*/

var range = function (n) {
  var result = [];
  for (var i = 0; i < n + 1; i++) {
    result.push(0);
  }
  return result;
};

function getMinSteps (n) {
  var results = range(n + 1);
  results[1] = 0;
  for (var i = 2; i < results.length; i++) {
    // increase one step, can be reset later
    results[i] = results[i-1] + 1;
    if (i % 2 === 0) {
      // if divisible by 2, reset results[i] to be max of results[i - 1] + 1
      // or results[i/2 + 1] 
      results[i] = Math.min(results[i - 1] + 1, results[i / 2] + 1);
    } else if (i % 3 === 0) {
      results[i] = Math.min(results[i - 1] + 1, results[i / 3] + 1);
    }
  }
  return results[n];
}
