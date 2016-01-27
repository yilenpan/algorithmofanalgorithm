/////////////////////////////////////////////////////////////
//  Thief's knapsack
// --------------------------
// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
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


var weights = {
  10: 40,
  20: 55,
  1: 1,
  5: 50
};

var maxWeight = 50;

console.log('Pass? ', knapsack(weights, maxWeight) === 146);
