var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"

document.addEventListener('keydown', function(key) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = '${left - 1}px'
  }
})
