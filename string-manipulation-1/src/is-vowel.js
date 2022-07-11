/* exported isVowel */
/*
- make a list of vowels in uppercase and lowercase
- loop through the list and compare each vowel to the given character
- if they are equal we will return true
- if they are not equal we will return false.
*/
function isVowel(character) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i <= vowels.length; i++) {
    if (vowels[i] === character) {
      return true;
    }
  }
  return false;
}
