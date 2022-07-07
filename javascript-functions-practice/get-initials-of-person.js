/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var newPerson = person;
  return newPerson.firstName[0] + newPerson.lastName[0];
}
