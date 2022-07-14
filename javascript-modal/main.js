var $blue = document.querySelector('.blue');
var $modalcontainer = document.querySelector('.modal-container');
var $overlay = document.querySelector('.overlay');
var $red = document.querySelector('.red');

$blue.addEventListener('click', function () {
  $modalcontainer.className = 'modal-container';
  $overlay.className = 'overlay';
});
$red.addEventListener('click', function () {
  $overlay.className = 'overlay active';
  $modalcontainer.className = 'modal-container active';
});
