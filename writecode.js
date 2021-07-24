function addToZero(arr) {
  // console.log(arr)
  let sum = 0;
  // console.log(sum)
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum)
  }
  if (sum === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

addToZero([2, -2]);
//Runtime of this code: O(n)
