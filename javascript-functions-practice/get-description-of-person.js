/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var newPerson = person;
  return newPerson.name + ' is a ' +
  newPerson.occupation + ' from ' + newPerson.birthPlace + '.';
}
