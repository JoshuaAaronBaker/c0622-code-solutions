/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var x = number;
  if (x < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  var x = number;
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var newString = string;
  if (newString[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var newPerson = person;
  if (newPerson.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var newPerson = person;
  if (newPerson.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  var newPerson = person;
  if (newPerson) {
    return false;
  }
}

function categorizeAcidity(pH) {
  var substance = pH;
  if (substance > 7 & substance <= 14) {
    return 'Basic';
  } else if (substance < 7 & substance > 0) {
    return 'Acidic';
  } else if (substance === 7) {
    return 'Neutral';
  } else {
    return 'Invalid pH Level';
  }
}

function introduceWarnerBro(name) {
  var char = name;
  if (char === 'yakko' || char === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (char === 'dot') {
    return 'I\'m Cute~';
  } else {
    return 'Goodnight Everybody!';
  }

}
