function BinarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [12, 13, 14, 23, 24, 34, 35];
const key = 10;

console.log(BinarySearch(arr, key));
