/* exported getWords */
/*
- split up the given string wherever it has a space between words
- put the split up words into a list and return the list

>>>>I didn't know to account for an empty string, Im not sure how to write that into the plan beforehand
my solution seems based on meeting the final test case
*/
function getWords(string) {
  if (string !== '') {
    return string.split(' ');
  }
  return string.split('');
}
