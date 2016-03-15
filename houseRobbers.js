/////////////////////////////////////////////////////////////
// House Robbers
//
// You are given a list of homes with dollar amounts associated with them
// If you rob one house, you can't rob the houses next to them.
//
// Ex. [a, b, c]
// if I rob house 'a', I can't rob house b
// if I rob house 'b', I can't rob a or c
// if I rob house 'c', I can't rob house b
//
// Your goal is to tell me the max dollar amount that I can make
//
/////////////////////////////////////////////////////////////

var testCase = [123, 12345, 1, 2, 543, 41];

var houseRobbers = function (houses) {
  var total = [];
  for (var i = 0; i < houses.length; i++) {
    total[i] = Math.max((total[i - 2] || 0) + houses[i],
                        (total[i - 3] || 0) + houses[i],
                        (total[i - 1] || 0));
  }
  return total.pop();
};

console.log(houseRobbers(testCase));
