var student = {
  firstName: 'Joshua',
  lastName: 'Baker',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Supra',
  year: '2023'
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle.color);
console.log('value of vehicle["isConvertible"]: ', vehicle.isConvertible);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Bella',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('the value of pet: ', pet);
