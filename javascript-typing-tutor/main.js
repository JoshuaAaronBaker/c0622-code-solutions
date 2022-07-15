var $char = document.querySelectorAll('span');
var charCount = 0;

document.addEventListener('keydown', function typingTutor(event) {
  if ($char[charCount].textContent === event.key) {
    $char[charCount].className = 'green';
    $char[charCount + 1].className = ' underline';
    charCount++;
  } else if ($char[charCount].textContent !== event.key) {
    $char[charCount].className = 'red underline';
  }
});
