const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = parseInt(dodger.style.left.replace('px', ''))

  if (rightNumbers < 360)
    dodger.style.left = `${rightNumbers + 5}px`
}



$(document).ready(function(){
  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      moveDodgerLeft()
    }
    if (e.which === 39) {
      moveDodgerRight()
    }
  })
})
