/*
- divide the array in half
- merge sorted array
*/

/**
 * description
 * @param {number[]} arr
 * @return {number[]} sorted arr
 */
function mergeSort(arr: number[]): number[] {
  let size = arr.length;
  if (size <= 1) return arr;

  let mid = Math.floor(size / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/**
 * merge two already sorted array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]} return sorted array
 */
function merge(arr1: number[], arr2: number[]): number[] {
  let results: number[] = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      results.push(arr1[p1]);
      p1++;
    } else {
      results.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    results.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    results.push(arr2[p2]);
    p2++;
  }

  return results;
}

// test
console.log(mergeSort([10, 24, 76, 73, 1]));
// console.log(merge([10, 20], [1, 12, 25]));
