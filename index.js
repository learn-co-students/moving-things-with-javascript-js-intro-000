const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0 && left < 360) {
    dodger.style.left = `${left - 3}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (left > 0) {
    dodger.style.right = `${right - 3}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37){
    moveDodgerLeft()
} else if (e.which === 39){
    moveDodgerRight()
  }
})
