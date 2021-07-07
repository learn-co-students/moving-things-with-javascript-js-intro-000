const app = "I don't do much."
var gameDiv = document.getElementById('game')

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
    var left = parseInt(dodger.style.left, 10)
    var divWidth = parseInt(gameDiv.clientWidth, 10)
    var dodgerWidth = parseInt(dodger.clientWidth, 10)
      if (left + dodgerWidth < divWidth) {
          dodger.style.left = `${left+1}px`
        }
  }

document.addEventListener('keydown', function(key) {
    if (key.which===37) {
        moveDodgerLeft()
      } else if (key.which===39) {
        moveDodgerRight()
      }
  })
