function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
}

const arr = [1, 2, 3, 43, 23, 12, 34];
const key = 23;

console.log(LinearSearch(arr, key));
