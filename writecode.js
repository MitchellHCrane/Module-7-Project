function addToZero([num1, num2]) {
  const sum = num1 + num2;
  if ((sum = 0)) {
    return true;
  } else {
    return false;
  }
  console.log(addToZero(3, -3));
}

//Runtime of this code: O(n)
