let count = 3;
let countdownId = null;

function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countdown, 1000);
