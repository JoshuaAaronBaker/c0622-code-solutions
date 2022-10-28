var $buttons = document.querySelector('.icon-wrapper');
var $selectors = document.querySelectorAll('.selector');
var $prev = document.querySelector('.fa-angle-left');
var $next = document.querySelector('.fa-angle-right');
var $image = document.getElementById('hero-image');

var carouselImages = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var id = 0;

var intervalId = setInterval(arrowRightHandle, 3000);

function parentHandle(event) {
  for (var i = 0; i < $selectors.length; i++) {
    if ($selectors[i] === event.target) {
      $image.setAttribute('src', carouselImages[i]);
      $selectors[i].className = 'fas fa-circle circle-margin circle';
      id = i;
    } else {
      $selectors[i].className = 'far fa-circle circle-margin circle';
    }
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$buttons.addEventListener('click', parentHandle);

function arrowButtonMatch() {
  for (var k = 0; k < $selectors.length; k++) {
    if (k === id) {
      $selectors[k].className = 'fas fa-circle circle-margin circle';
    } else {
      $selectors[k].className = 'far fa-circle circle-margin circle';
    }
  }
}

function arrowRightHandle(event) {
  $image.setAttribute('src', carouselImages[id + 1]);
  id++;
  arrowButtonMatch();

  if (id > 4) {
    $image.setAttribute('src', carouselImages[0]);
    id = 0;
    arrowButtonMatch();
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$next.addEventListener('click', arrowRightHandle);

function arrowLeftHandle(event) {
  $image.setAttribute('src', carouselImages[id - 1]);
  id--;
  arrowButtonMatch();

  if (id < 0) {
    $image.setAttribute('src', carouselImages[4]);
    id = 4;
    arrowButtonMatch();
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$prev.addEventListener('click', arrowLeftHandle);
