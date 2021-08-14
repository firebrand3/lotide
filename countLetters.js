const countLetters = function (string) {
  let results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter]++;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
