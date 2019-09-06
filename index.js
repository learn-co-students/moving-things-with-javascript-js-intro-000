const app = "I don't do much."

var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = '#FF69B4'

console.log(dodger.style.left)
console.log(dodger.style.bottom)

dodger.style.bottom = '100px'
dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left - 50}px`
    }
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left < 350) {
      dodger.style.left = `${left + 50}px`
    }
  }
})
