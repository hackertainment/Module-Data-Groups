function findMax(elements) {
    let max = Number.NEGATIVE_INFINITY;
    let nums = elements.filter(Number.isFinite);

    for (let i=0; i<nums.length; i++) {
        if (nums[i]>max) {
            max = nums[i];
        }
    }

    return max;
}

module.exports = findMax;
