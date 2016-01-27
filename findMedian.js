/////////////////////////////////////////////////////////////
// Find Median of unsorted integer stream
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//
// Given a stream of unordered integers, Find the median of the stream
// any time we want it. We will be asked to find the median multiple times.
//
// For instance:
// var mStream = new MedianStream();
// mStream.insert(1);
// mStream.insert(3);
// mStream.insert(2);
// mStream.getMedian(); // => 2
// mStream.insert(5);
// mStream.insert(4);
// mStream.getMedian(); // => 3
//
/////////////////////////////////////////////////////////////


var MedianStream = function () {
  // TODO: Implement!
};

MedianStream.prototype = {
  insert: function () {/**/},
  getMedian: function () {/**/},
  size: function () {/**/}
};


/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var mStream = new MedianStream();

[1,5,2,3,41,2,5,234,56,3,2,1,2,3].forEach(function (num) {
  mStream.insert(num);
});

console.log('Median === 3? ', mStream.getMedian() === 3);
