const app = "I don't do much."

var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '0px';

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
   moveDodgerLeft();
  }
  if (e.which === 39) {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

// since left side of div is 180, total should be 360
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}
