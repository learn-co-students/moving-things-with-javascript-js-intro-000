const app = "I don't do much."
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left // "180px"
dodger.style.bottom // "0px"
dodger.style.bottom = '100px'
dodger.style.bottom = '0px'
//dodger.style.right = '150px'


//document.addEventListener('keydown', function(e) {
//  console.log(e.which)
//})
//document.addEventListener('keydown', function(e) {
//  if (e.which === 37) {
//    var leftNumbers = dodger.style.left.replace('px', '')
//    var left = parseInt(leftNumbers, 10)

//    dodger.style.left = `${left - 1}px`
//  }
//})
var dodger = document.getElementById('dodger')
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()

  }
  if (e.which === 39) {

    moveDodgerRight()
  }
})
function moveDodgerRight() {

  var rightNumbers = dodger.style.left.replace('px', '')

  var left = parseInt(rightNumbers, 10)

  if (left > 0 && rightNumbers < 360) {

    dodger.style.left = `${left + 1}px`

  }
}
