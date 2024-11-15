/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let rob1 = 0;
  let rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = max;
  }

  return rob2;
}
