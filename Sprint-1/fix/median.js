// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let nums = [];

  if (Array.isArray(list)) {
    nums = list.filter(Number.isFinite).sort((a,b) => a-b);
  }

  if (nums.length==0) {
    return null;
  }
  else {
    const middleIndex = Math.floor(nums.length / 2);
    const median = (nums.length%2==1 ? nums[middleIndex] : (nums[middleIndex]+nums[middleIndex-1])/2);
    return median;
  }
}

module.exports = calculateMedian;
