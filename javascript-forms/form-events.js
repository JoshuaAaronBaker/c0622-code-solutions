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

var $username = document.querySelector('#user-name');
var $useremail = document.querySelector('#user-email');
var $usermessage = document.querySelector('#user-message');

$username.addEventListener('focus', handleFocus);
$username.addEventListener('input', handleInput);
$username.addEventListener('blur', handleBlur);

$useremail.addEventListener('focus', handleFocus);
$useremail.addEventListener('input', handleInput);
$useremail.addEventListener('blur', handleBlur);

$usermessage.addEventListener('focus', handleFocus);
$usermessage.addEventListener('input', handleInput);
$usermessage.addEventListener('blur', handleBlur);
