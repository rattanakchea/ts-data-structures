import { Sodoku } from "./sodoku";

const puzzle = [
  [6, 3, 4, 1, 0, 0, 5, 2, 7],
  [0, 7, 5, 0, 3, 2, 0, 0, 0],
  [8, 9, 0, 5, 0, 0, 0, 0, 0],
  [3, 5, 7, 0, 8, 0, 2, 0, 0],
  [4, 0, 8, 0, 0, 0, 7, 0, 9],
  [0, 0, 1, 0, 2, 0, 8, 3, 4],
  [0, 0, 0, 0, 0, 6, 0, 4, 5],
  [0, 0, 0, 4, 7, 0, 9, 8, 0],
  [2, 4, 3, 0, 0, 9, 1, 7, 6]
];

const puzzle2 = [[6, 3, 4, 1, 9, 8, 5, 2, 7]];

let sodoku = new Sodoku(puzzle);

console.log(sodoku.puzzle);
console.log(sodoku.get_row(-2));
console.log("get column 2");
console.log(sodoku.get_col(2));
console.log("get box at row 2, col 5");
console.log(sodoku.get_box(8, 8));

console.log("find possibilities for row 1, col 0");
console.log(sodoku.find_possiblities(1, 0));

console.log("find possibilities for row 2, col 3");
console.log(sodoku.find_possiblities(2, 3));

console.log("test is puzzle is solved");
console.log(sodoku.is_solved());

console.log("check if the puzzle is solved correctly");
console.log("solved: ", sodoku.is_solved());
console.log("solve the puzzle");
console.log(sodoku.solve());

console.log("check if the puzzle is solved correctly");
console.log("solved: ", sodoku.is_solved());
