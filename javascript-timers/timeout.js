var $h1 = document.querySelector('.message');

function helloThere() {
  $h1.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
