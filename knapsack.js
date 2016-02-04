var range = function (n, elm) {
  var out = [];
  for (var i = 0; i < n; i++) {
    if (Array.isArray(elm)) {
      out.push(elm.slice());
    } else {
      out.push(elm);
    }
  }
  return out;
};

var knapsack = function (maxWeight, weights, vals, n) {
  var table = range(vals.length + 1, range(maxWeight + 1, 0));
  // i = rows, w = cols
  // weights = rows
  // maxWeight = cols
  for (var i = 0; i < n + 1; i++) {
    // w = the currentMax weight when we build it up
    for (var w = 0; w < maxWeight + 1; w++) {
      if (i === 0 || w === 0) {
        table[i][w] = 0;
        // if the current weight of the item can fit in w space
      } else if (weights[i - 1] <= w) {
        // table[i][w] is the max of the current items value + the val of
        // the items if we minus out the weight
        // or the weight if we didn't add it in
        table[i][w] = Math.max(vals[i - 1] + table[i - 1][w - weights[i - 1]], table[i - 1][w]);
      } else {
        // otherwise the value of the the current position is = to the the row above
        table[i][w] = table[i - 1][w];
      }
    }
  }
  return table[n][maxWeight];
};

var val = [6000, 100, 120, 1000];
var wt = [50, 20, 30, 5];
var W = 50;
var n = val.length;

console.log(knapsack(W, wt, val, n));
