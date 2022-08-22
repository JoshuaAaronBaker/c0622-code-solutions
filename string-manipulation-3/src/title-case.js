/* exported titleCase */
/*
- create a new array to hold capitalized words
- split the given title into an array
- loop through title array
- create a new variable and assign it the value the current index runs and assign them in turn to the new variable:
- make first letter of every word capital
- check if word is lowercased
- make sure every word in title arr is capitalized
- use if statement to make sure JavaScript and API are cased as written
- add the new variable to the capital letters array as the loop runs
- join arr and store in variable
- split the new string at each charater
- create new empty array
- loop through new split string array
- if letter comes after hyphen or color capitalize it
- add letter into new empty array
- join on array with letters
- return joined string array
*/

function titleCase(title) {
  var capital = [];
  var split = title.split(' ');
  for (let i = 0; i < split.length; i++) {
    var cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    if (split[i].toLowerCase() === 'and' || split[i].toLowerCase() === 'or' ||
      split[i].toLowerCase() === 'to' || split[i].toLowerCase() === 'the' || split[i].toLowerCase() === 'of' ||
      split[i].toLowerCase() === 'for' || split[i].toLowerCase() === 'an' ||
      split[i].toLowerCase() === 'in' || split[i].toLowerCase() === 'on') {
      cap = split[i].toLowerCase();
    }
    if (i === 0) {
      cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    }
    if (split[i].toLowerCase() === 'javascript') {
      cap = 'JavaScript';
    } else if (split[i].toLowerCase() === 'javascript:') {
      cap = 'JavaScript:';
    }
    if (split[i].toLowerCase() === 'api') {
      cap = 'API';
    }
    capital.push(cap);
    var newString = capital.join(' ');
    var strArr = newString.split('');
    var newArr = [];
    for (let s = 0; s < strArr.length; s++) {
      var newCap = strArr[s];
      if (strArr[s - 1] === '-') {
        newCap = strArr[s].toUpperCase();
      }
      if (strArr[s - 2] === ':') {
        newCap = strArr[s].toUpperCase();
      }
      newArr.push(newCap);
    }
    var newStr = newArr.join('');
  }
  return newStr;
}
