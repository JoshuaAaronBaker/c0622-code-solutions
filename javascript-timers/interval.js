var $countdown = document.querySelector('.countdown-display');
var count = 4;
var countDownId = null;

function CountDown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDownId);
  }
}

countDownId = setInterval(CountDown, 1000);
