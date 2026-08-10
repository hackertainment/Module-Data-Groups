function sum(elements) {
    let total = 0;
    let nums = elements.filter(Number.isFinite);

    for (let i=0; i<nums.length; i++) {
        total = total+nums[i];
    }

    return total;
}

module.exports = sum;
