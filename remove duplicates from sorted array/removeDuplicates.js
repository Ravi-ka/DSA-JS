function removeDuplicates(nums) {
  let x = 0; // index of the nums array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  //console.log(nums) // o/p -> [2,5,6,7,8,9,8,9,9]
  return x + 1; // o/p -> 6
}
console.log(removeDuplicates([2, 2, 5, 6, 6, 7, 8, 9, 9]));

/*
- Initially the x value is denoting the index position of the array, so we need to return x+1 for the total unique count. If we directly return the x, it will give the index count only(where 1 count will be lesser)

- This solution is derived using two pointers
*/
