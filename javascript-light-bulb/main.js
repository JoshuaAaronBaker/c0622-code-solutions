var lightSwitch = 0;
var $bulb = document.querySelector('.bulb');
var $lightoff = document.querySelector('.light-off');

$bulb.addEventListener('click', function flip() {
  lightSwitch++;
  if (lightSwitch % 2 !== 0) {
    $bulb.className = 'bulb bulb-on';
    $lightoff.className = 'container light-on';
  } else {
    $bulb.className = 'bulb off';
    $lightoff.className = 'container light-off';
  }
});
