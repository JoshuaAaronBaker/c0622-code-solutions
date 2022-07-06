function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return minutes + ' minutes is equal to ' + seconds + ' seconds';
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log(greet('Kanye'));

function getArea(width, height) {
  var area = width * height;
  return 'The area is: ' + area;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  var fullName = person;
  return 'The first name of the person is ' + fullName.firstName;
}
console.log(getFirstName({ firstName: 'Travis', lastName: 'Scott' }));

function getLastElement(array) {
  var element = array;
  var lastElement = element.length - 1;
  return 'The last element in the array is: ' + element[lastElement];
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
