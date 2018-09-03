import { Graph } from "../graph/graph";
import * as Search from "../search/search";

// count the number of islands
/*
1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1
*/

// expected: 3  no diagonal
// expected: 1  count diagonal

let graph = new Graph(4);

let adjMatrix: number[][] = [
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];

console.log("Number of islands: ", dfs(adjMatrix));

function count_island() {}

function dfs(adjMatrix: number[][]) {
  let row_count = adjMatrix.length;
  let col_count = adjMatrix[0].length;
  let visited: boolean[][] = [[], [], [], []];
  for (let row = 0; row < row_count; row++) {
    for (let col = 0; col < col_count; col++) {
      visited[row].push(false);
    }
  }

  let numberOfIsland = 0;
  for (let row = 0; row < row_count; row++) {
    for (let col = 0; col < col_count; col++) {
      numberOfIsland += _dfs(adjMatrix, visited, row, col);
    }
  }
  return numberOfIsland;
}

function _dfs(
  matrix: number[][],
  visited: boolean[][],
  row: number,
  col: number
) {
  if (visited[row][col]) {
    console.log("Already visited at row: ", row, " col:", col);
    return 0;
  }
  let node = matrix[row][col];
  if (node == 0) return 0;

  // node is 1
  visited[row][col] = true;
  // explore all adjacent nodes
  let adjPairs = getAdjNodes(matrix, row, col);
  for (let row_col_pair of adjPairs) {
    [row, col] = row_col_pair;
    _dfs(matrix, visited, row, col);
  }

  return 1;
}

// return array of [[row, col]] of adjacent nodes
function getAdjNodes(matrix: number[][], row: number, col: number) {
  let row_count = matrix.length;
  let col_count = matrix[0].length;
  let result = [];
  if (col + 1 < col_count) {
    result.push([row, col + 1]);
  }
  if (col - 1 >= 0) {
    result.push([row, col - 1]);
  }
  if (row + 1 < row_count) {
    result.push([row + 1, col]);
  }
  if (row - 1 >= 0) {
    result.push([row - 1, col]);
  }
  return result;
}
