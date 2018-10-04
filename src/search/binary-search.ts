/**
 * binary search
 * @param {number[]} nums  sorted array of number
 * @return {number} return index number of found number else return -1
 */
export function binary_search(nums: number[], needle: number): number {
  //return binary_search_recursive(nums, needle, 0, nums.length - 1);
  return binary_search_iterative(nums, needle, 0, nums.length - 1);
}

/**
 * recursive binary search
 * @return {number} return index number of found number else return -1
 */
function binary_search_recursive(
  nums: number[],
  needle: number,
  start: number,
  end: number
): number {
  // base case
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] > needle) {
    return binary_search_recursive(nums, needle, start, mid - 1);
  } else if (nums[mid] < needle) {
    return binary_search_recursive(nums, needle, mid + 1, end);
  } else {
    return mid;
  }
}

function binary_search_iterative(
  nums: number[],
  needle: number,
  start: number,
  end: number
) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > needle) {
      end = mid - 1;
    } else if (nums[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// test
let nums = [1, 3, 7, 10, 12, 20, 32];
let needle = 32;
var foundIndex = binary_search(nums, needle);
console.log("found at index: ", foundIndex);
needle = 100;
var notFoundIndex = binary_search(nums, needle);
console.log("found at index: ", notFoundIndex);
