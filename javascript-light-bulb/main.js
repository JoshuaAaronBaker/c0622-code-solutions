var lightSwitch = false;
var $bulb = document.querySelector('.bulb');
var $lightoff = document.querySelector('.light-off');

$bulb.addEventListener('click', function flip() {
  lightSwitch = !lightSwitch;
  if (lightSwitch === true) {
    $bulb.className = 'bulb bulb-on';
    $lightoff.className = 'container light-on';
  } else if (lightSwitch !== true) {
    $bulb.className = 'bulb off';
    $lightoff.className = 'container light-off';
  }
});
