function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length == 0) return null;
  let smallestNum;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false;
    if (smallestNum === undefined || arr[i] < smallestNum) smallestNum = arr[i];
  }
  return smallestNum;
}

module.exports = { findSmallest };
