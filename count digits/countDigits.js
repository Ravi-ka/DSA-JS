function countDigits(n) {
  if (n == 0) {
    // If the input is 0, the digit count should be considered as 1
    return 1;
  }
  let count = 0;
  n = Math.abs(n); // Math.abs() will convert the input to positive number
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(-87));

/* Output
123 -> 3
0 -> 1
-65 -> 2
*/
