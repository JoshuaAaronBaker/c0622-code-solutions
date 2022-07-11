function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $buttonClicked = document.querySelector('.click-button');
$buttonClicked.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event tagret: ', event.target);
}

var $mouseover = document.querySelector('.hover-button');
$mouseover.addEventListener('mouseover', handleMouseover);

function handleDOubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $doubleclicked = document.querySelector('.double-click-button');
$doubleclicked.addEventListener('dblclick', handleDOubleClick);
