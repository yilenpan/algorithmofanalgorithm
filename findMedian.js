/////////////////////////////////////////////////////////////
// Find Median of unsorted integer stream
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Many ways to find the median - for instance, a balanced
// binary tree would work. However, whenever a binary tree
// rebalances, it does it in linear time.
//
// There is a better solution: by splitting the data into
// a minHeap and a maxHeap, we can narrow in on the median by
// popping off the maxHeap or both and averaging.
//
// NOTE: A Binary Min Heap always has the least scoring node as it's root
// NOTE: A Binary Max Heap always has the highest scoring node as its root
//
// The rules are this:
//   1. Everything in the maxHeap needs to be lower or equal
//      to the minHeap
//
//   2. Both heaps are equal size with an even input stream
//      and the maxHeap has one more item in an odd input stream
//
//   3. Finding the median for an even input stream is the avg
//      of the popped value of a maxHeap and the minHeap
//      for an odd input stream, it's the popped value of the
//      maxHeap
//
//
// EX:
//  Given a input stream of [5,3,2,1,23,5,234] find the median
//
//       maxHeap          <          minHeap
//       --------------------------------------
//  5 -> 5
//  3 -> 3 (5) ->           5
//  2 -> 2,3                5
//  1 -> 1,2 (3) ->         3,5
// 23 -> 1,2,23             3,5 (Uh oh... root of maxHeap > root of minHeap, SWAP!)
//       1,2,(3)     <->    5,(23) (AFTER SWAP!)
//  5 -> 1,2,3 (5) ->       5,5,23
//234 -> 1,2,3,234          5,5,23 (Uh oh... root of maxHeap > root of minHeap, SWAP!)
//       1,2,3,(5)   <->    5,23,(234)
//              ^
//              This guy is our median
/////////////////////////////////////////////////////////////


var minMaxHeap = function () {
  this.minHeap = new BinaryHeap(function (child, parent) {
    return child >= parent;
  });
  // lower half
  this.maxHeap = new BinaryHeap(function (child, parent) {
    return child <= parent;
  });
};

// everything in the maxHeap has to be less than or equal to minHeap
  // if we pop off the maxHeap it's greater than minHeap, then we
  // swap the two of them

minMaxHeap.prototype = {
  insert: function (elm) {
    if (this.size() % 2 === 0) {
      this.maxHeap.push(elm);
      // if there are no items in the minHeap
      if (!this.minHeap.content.length) {
        // end function
        return;
      }
      // if maxHeap root is greater than minHeap root, swap
      if (this.maxHeap.content[0] > this.minHeap.content[0]) {
        var toMax = this.minHeap.pop();
        var toMin = this.maxHeap.pop();
        this.minHeap.push(toMin);
        this.maxHeap.push(toMax);
      }
    } else {
      // if odd number of elements
      // first push onto maxHeap
      this.maxHeap.push(elm);
      // pop off the max of the maxHeap
      var toMin = this.maxHeap.pop();
      // push it onto the minHeap
      this.minHeap.push(toMin);

    }
  },
  getMedian: function () {
    if (this.size() % 2 === 0) {
      return (this.minHeap.content[0] + this.maxHeap.content[0]) / 2.0;
    } else {
      return this.maxHeap.content[0];
    }
  },
  size: function () {
    return this.minHeap.size() + this.maxHeap.size();
  }
};

/////////////////////////////////////////////////////////////
// HELPERS!
/////////////////////////////////////////////////////////////
// Binary Heap
// Takes a compare function to define the child parent relationship
// NOTE: Should also probably take a scoring function for future
//       use cases
// NOTE: Could also be accomplished by using two minHeaps, but
//       multiplying the input by -1 when adding to the maxHeap
/////////////////////////////////////////////////////////////

function BinaryHeap (compareFunction) {
  this.content = [];
  // compares if it is a min or max heap, basically swap when this function
  // returns true
  this.compareFunction = compareFunction;
}

BinaryHeap.prototype = {
  push: function (element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  },
  pop: function () {
    // take the top item
    var result = this.content[0];
    // pop the last elm
    var end = this.content.pop();
    // if items in array
    if (this.content.length > 0) {
      // move the popped item to the begining
      this.content[0] = end;
      // move it down into the array
      this.sinkDown(0);
    }
    // return result
    return result;
  },
  remove: function (node) {
    // to remove item, we must search the array for the item
    var length = this.content.length;
    for (var i = 0; i < length; i++) {
      if (this.content[i] !== node) {
        continue;
      }
      // once we find the node, we pop off the last elm in array
      var end = this.content.pop();
      // if we are already at the end, stop
      if (i === length - 1) {
        break;
      }
      // otherwise, overwrite this.content[i] with end
      this.content[i] = end;
      // then bubbleUp and sinkDown with it
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },
  size: function () {
    return this.content.length;
  },
  bubbleUp: function (n) {
    var element = this.content[n];
    var parent;
    while (n > 0) {
      // get index of parent node
      var parentN = Math.floor((n + 1) / 2) - 1;
      parent = this.content[parentN];
      // if valid position found, break
      if (this.compareFunction(element, parent)) {
        break;
      }
      // otherwise, swap the current element with the parent
      // also swap the indexes
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },
  sinkDown: function (n) {
    var length = this.content.length;
    var element = this.content[n];
    while (true) {
      // get indexes of children
      var child2n = (n + 1) * 2, child1n = child2n - 1;
      // init swap in case we need to store the new position of the element
      var swap = null;
      // if child1n is in the array
      if (child1n < length) {
        // set child1 to the element at child1n
        var child1 = this.content[child1n];
        // if invalid position, meaning the child and it's parents conflict
        if (!this.compareFunction(child1, element)) {
          // set swap to index of child1
          swap = child1n;
        }
      }
      if (child2n < length) {
        var child2 = this.content[child2n];
        if (!this.compareFunction(child2, (swap === null ? element : child1))) {
          // swap index of child2
          swap = child2n;
        }
      }
      // if nothing got swapped, break
      if (swap === null) {
        break;
      }
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};

/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var stuff = new minMaxHeap();


[1,5,2,3,41,2,5,234,56,3,2,1,2,3].forEach(function (num) {
  console.log('inserting ', num);
  stuff.insert(num);
  console.log('median is ', stuff.getMedian());
});
