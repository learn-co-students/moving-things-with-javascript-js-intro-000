const app = "I don't do much."

var dodger = document.getElementById('dodger')
dodger.style.right = '100px'

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  console.log('rightNumbers is ', rightNumbers);
  console.log(right);
 
  if (right > 0) {
    dodger.style.right = `${right + 1}px`
  }
}