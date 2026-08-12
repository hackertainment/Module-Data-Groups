function tally(items) {
    let frequencies = {};

    if (!Array.isArray(items)) {
        throw new Error();
    }
    else {
        for (let i of items) {
            if (!frequencies.hasOwnProperty(i)) {
                frequencies[i] = 1;
            }
            else {
                frequencies[i]++;
            }
        }
    }

    return frequencies;
}

module.exports = tally;
