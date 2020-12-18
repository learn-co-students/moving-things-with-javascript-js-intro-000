const app = "I don't do much."
const dodger = document.getElementById('dodger')

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

  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

$(document).ready(function() {
  dodger.style.backgroundColor = '#FF69B4'
  dodger.style.bottom = "100px"
  $(document).on('keydown', function(e) {
    console.log(e.which)
    if (e.which === 37) {
      moveDodgerLeft()
    }
    if (e.which === 39) {
      moveDodgerRight()
    }
  })
})
