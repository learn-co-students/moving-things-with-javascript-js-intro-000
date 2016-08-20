const app = "I don't do much"

function moveDodgerLeft() {
  var leftNumbers = parseInt(dodger.style.left.replace('px', ''))

  if (leftNumbers > 0) {
    dodger.style.left = `${leftNumbers - 5}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = parseInt(dodger.style.left.replace('px', ''))

  if (rightNumbers < 360)
    dodger.style.left = `${rightNumbers + 5}px`
}

$(document).ready(function() {
  document.addEventListener('keydown', function(key) {
    if (parseInt(key.which || key.details) == 37) {
      moveDodgerLeft()
    }
    if (parseInt(key.which || key.details) == 39) {
      moveDodgerRight()
    }
  })
})
