function dedupe(elements) {
    let uniques = [];

    for (let i=0; i<elements.length; i++) {
        if (!uniques.includes(elements[i])) {
            uniques.push(elements[i]);
        }
    }

    return uniques;
}

module.exports = dedupe;