function findLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length == 0) return null;
  let largestNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false;
    if (arr[i] > largestNum && largestNum !== arr[i]) largestNum = arr[i];
  }
  return largestNum;
}

module.exports = { findLargest };
