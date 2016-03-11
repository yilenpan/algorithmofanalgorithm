var http = require('http');

var rawToJSON = function (rawBoard) {
  return rawBoard.split('\n').map(function (row) {
    return row.split('|').slice(1).slice(0, -1).reduce(function (row, col) {
      var a = col[1] === ' ' ? ' ' : parseInt(col[1]);
      var b = col[5] === ' ' ? ' ' : parseInt(col[5]);
      var c = col[9] === ' ' ? ' ' : parseInt(col[9]);
      return row.concat([a, b, c]);
    }, []);
  }).filter(function (n, i) {
    return i % 2 !== 0 && n.length;
  });
};

module.exports = function (solver) {
  http.get({
    hostname: "davidbau.com",
    port: 80,
    path: '/generated/sudoku.txt'
  }, function (response) {
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      solver(rawToJSON(body));
    });
  });
};
