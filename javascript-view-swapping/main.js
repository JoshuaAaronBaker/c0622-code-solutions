var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function eventMatch(event) {
  if (event.target.matches('.tab') !== true) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for (var x = 0; x < $view.length; x++) {
    if ($view[x].getAttribute('data-view') !== dataView) {
      $view[x].className = 'view hidden';
    } else {
      $view[x].className = 'view';
    }
  }
}

);
