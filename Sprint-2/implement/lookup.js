function createLookup(countryCurrencyPairs) {
  // implementation here
  let codes = {};
  
  for (let i of countryCurrencyPairs) {
    codes[i[0]] = i[1];
  }

  return codes;
}

module.exports = createLookup;
