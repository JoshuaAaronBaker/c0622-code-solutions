function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of name: ', event.target.value);
}

var $input = document.querySelector('input');
var $textarea = document.querySelector('textarea');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('input', handleInput);
$input.addEventListener('blur', handleBlur);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('input', handleInput);
$textarea.addEventListener('blur', handleBlur);
