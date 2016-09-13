const app = "I don't do much."

function moveDodgerLeft() {
  var leftNumbers = document.getElementById('dodger').style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    document.getElementById('dodger').style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = document.getElementById('dodger').style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 360) {
    document.getElementById('dodger').style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
  else if (e.which === 39) {
    moveDodgerRight();
  }
})
