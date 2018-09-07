import { Stack } from "../stack/stack";

const possibilities = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

class Sodoku {
  puzzle: number[][] = [];
  solution: number[][] = [];
  row_size: number = 9;
  col_size: number = 9;

  constructor(puzzle: number[][]) {
    this.puzzle = puzzle;
  }

  // get row
  get_row(row: number): number[] {
    if (row < this.row_size && row >= 0) {
      return this.puzzle[row];
    }
    console.warn("Invalid row");
  }
  // get column
  get_col(col: number): number[] {
    if (col < this.col_size && col >= 0) {
      return this.puzzle.map(row => row[col]);
    }
    console.warn("Invalid column");
  }

  // get box
  // @params: row, column number (0-8)
  // @return: array of number in the box
  get_box(row: number, col: number): number[] {
    let startRow = Math.floor(row / 3) * 3;
    let endRow = startRow + 3;
    let startCol = Math.floor(col / 3) * 3;
    let endCol = startCol + 3;

    let box = [];
    for (let r = startRow; r < endRow; r++) {
      for (let c = startCol; c < endCol; c++) {
        box.push(this.puzzle[r][c]);
      }
    }
    return box;
  }

  find_possibilities(row: number, col: number): number[] {
    if (this.puzzle[row][col] != 0) {
      console.warn(
        "This puzzle cell is already filled in. Please check the row and col again"
      );
      return;
    }

    let numbers_in_row = this.get_row(row);
    let numbers_in_col = this.get_col(col);
    let numbers_in_box = this.get_box(row, col);
    // deconstruct and put into unique set
    let union = new Set([
      ...numbers_in_row,
      ...numbers_in_col,
      ...numbers_in_box
    ]);
    // console.log("union is: ", union);
    return Array.from(possibilities).filter(number => {
      return !union.has(number);
    });
  }

  // solve sodoku puzzle
  // walk each cell
  // check if it is filled in yet
  solve() {
    // can be hard-coded to 9
    let row_size = this.puzzle.length;
    let col_size = this.puzzle[0].length;

    let filled_cells_count = 0; //keep counter of filled cells

    // brute force solution
    // work for each sodoku
    // no cross checking other adjacent rows/cols
    while (filled_cells_count < 81) {
      filled_cells_count = 0;
      for (let row = 0; row < row_size; row++) {
        for (let col = 0; col < col_size; col++) {
          if (this.puzzle[row][col] == 0) {
            let possibilities = this.find_possibilities(row, col);
            // only one possibility
            if (possibilities.length == 1) {
              this.puzzle[row][col] = possibilities[0]; //save into the puzzle
              filled_cells_count++;
            }
          } else {
            filled_cells_count++;
          }
        }
      }
    }
    return this.puzzle;
  }

  // improved version
  // using a stack is faster
  // because we don't have to keep checking the one already filled
  solve_2() {
    // can be hard-coded to 9
    let row_size = this.puzzle.length;
    let col_size = this.puzzle[0].length;
    let stack: Stack<[number, number]> = new Stack();

    for (let row = 0; row < row_size; row++) {
      for (let col = 0; col < col_size; col++) {
        if (this.puzzle[row][col] == 0) {
          let possibilities = this.find_possibilities(row, col);
          // only one possibility
          if (possibilities.length == 1) {
            this.puzzle[row][col] = possibilities[0]; //save into the puzzle
          } else {
            stack.push([row, col]); //save into a stack
          }
        }
      }
    }

    while (stack.size() > 0) {
      let [row, col] = stack.pop();
      let possibilities = this.find_possibilities(row, col);
      if (possibilities.length == 1) {
        this.puzzle[row][col] = possibilities[0]; //save into the puzzle
      } else {
        stack.addToFront([row, col]);
      }
    }

    return this.puzzle;
  }

  // check is puzzle is solved or complete
  // the puzzle is filled when there is zero in all the cells

  is_filled() {
    for (let row of this.puzzle) {
      if (row.some(number => number == 0)) {
        return false;
      }
    }
    return true;
  }

  // the puzzle is correct when each row, column, box is filled by unique 1-9
  is_solved() {
    for (let row = 0; row < 9; row++) {
      let current_row = this.get_row(row);
      if (!this.is_valid_block(current_row)) {
        return false;
      }

      let current_col = this.get_col(row);
      if (!this.is_valid_block(current_col)) {
        return false;
      }
    }

    // check each box
    for (let row = 0; row < 9; row = row + 3) {
      for (let col = 0; col < 9; col = col + 3) {
        let current_box = this.get_box(row, col);
        if (!this.is_valid_block(current_box)) {
          return false;
        }
      }
    }
    return true;
  }

  // check if row, col, box is valid
  // i.e contains 1-9 unique
  is_valid_block(numbers: number[]) {
    if (numbers.length == possibilities.size) {
      let set = new Set(numbers);
      if (set.size == possibilities.size) {
        set.forEach(value => {
          if (!possibilities.has(value)) return false;
        });
        return true;
      }
      return false;
    }
    return false;
  }
}

export { Sodoku };
