const app = "I don't do much.";

var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 5}px`
  }
}

function moveDodgerUp() {
  var upNumbers = dodger.style.bottom.replace('px', '')
  var up = parseInt(upNumbers, 10)
  if (up < 360) {
    dodger.style.bottom = `${up + 5}px`
  }
}

function moveDodgerDown() {
  var upNumbers = dodger.style.bottom.replace('px', '')
  var up = parseInt(upNumbers, 10)
  if (up > 0) {
    dodger.style.bottom = `${up - 5}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 39) {
    moveDodgerRight();
  } else if (e.which === 38) {
    moveDodgerUp();
  } else if (e.which === 40) {
    moveDodgerDown();
  }
})
