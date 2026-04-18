var isPalindrome = function (x) {
  let xDup = x;
  let rem = 0;
  let rev = 0;
  while (x > 0) {
    rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  if (rev === xDup) return true;
  else return false;
};

console.log(isPalindrome(-121));

/*
Note:
Get the last digit    : n % 10
Remove the last digit : n / 10
*/
