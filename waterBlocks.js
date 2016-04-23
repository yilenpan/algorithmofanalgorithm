/////////////////////////////////////////////////////////////
// Water Blocks
// ---------------------------------------------------------
// You are given an input array whose each element represents
// the height of a line towers. The width of every tower is 1.
// It starts raining. How much water is collected between the towers?
//
// Ex.
//
// Water blocks:
// Input: [3,2,5,2,1,3]
// Output: 4
// Visualization:
// 	 #
// 	 #
// #-#--#
// ####-#
// ######
//
// '-' is water
// '#' is a block
/////////////////////////////////////////////////////////////

var waterBlocks = function (blocks) {
  // TODO: Implement
};

//////////////////////////////////////////////////
// TEST CASES
//////////////////////////////////////////////////

console.log('Pass? ', waterBlocks([1,5,2,3,5,6]) === 5);
console.log('Pass? ', waterBlocks([1,5,2,3,5,6]) === 5);
console.log('Pass? ', waterBlocks([10,10,10,10]) === 0);
console.log('Pass? ', waterBlocks([0]) === 0);
console.log('Pass? ', waterBlocks([0,0,10,0,0]) === 0);
console.log('Pass? ', waterBlocks([0,1,2,3,4,5]) === 0);
console.log('Pass? ', waterBlocks([5,4,3,2,1,0]) === 0);
console.log('Pass? ', waterBlocks([10,0,10]) === 10);

