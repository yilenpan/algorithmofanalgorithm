var sudokuSolver = require('./sudokuSolver');
var getBoard = require('./getBoard');

getBoard(function (board) {
  console.log('******************* SUDOKU SOLVER *******************');
  console.log("                  HERE IS YOUR BOARD");
  console.log(board);
  console.log("*****************************************************");
  console.log("              HERE IS YOUR BOARD SOLVED");
  console.log("*****************************************************");
  console.log(sudokuSolver(board));
});
