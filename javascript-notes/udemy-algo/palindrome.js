function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("race car"));

// A string is the same regardless of direction it is spelt
