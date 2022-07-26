function ExampleConstructor() {

}
console.log('value of prototype property of ExampleConstructor:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof prototype property of ExampleConstructor:', typeof Object.getPrototypeOf(ExampleConstructor));

var anExampleContructor = new ExampleConstructor();

console.log('value of anExampleConstructor:', anExampleContructor);
console.log('anExampleConstructor is an instanceof ExampleConstructor:', anExampleContructor instanceof ExampleConstructor);
