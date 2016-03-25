/////////////////////////////////////////////////////////////
//  Thief's knapsack
// --------------------------
// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
//
// The Thief can't pick the same item twice.
//
// What is the maximum worth of goods that the thief can steal?
//
/////////////////////////////////////////////////////////////


var knapsack = function (weights, maxWeight) {
  // TODO: Implement!
};

/////////////////////////////////////////////////////////////
// TEST CASES
/////////////////////////////////////////////////////////////

//Keys are weights, values are stolen good's values.
var weights = {
  10: 40,
  20: 55,
  1: 1,
  5: 50,
  50: 147,
};

console.log('Pass? ', knapsack(weights, 31) === 106);
console.log('Pass? ', knapsack(weights, 50) === 147);
console.log('Pass? ', knapsack(weights, 60) === 198);

