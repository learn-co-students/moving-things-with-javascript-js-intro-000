const app = "I don't do much."

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = '#FF69B4'

document.addEventListener('keydown', function(e) {
  var horizontalLeft = parseInt(dodger.style.left)

  if (e.which === 37 && horizontalLeft > 0) {
    dodger.style.left = `${horizontalLeft - 10}px`
  }

  else if (e.which === 39 && horizontalLeft < 360){
    dodger.style.left = `${horizontalLeft + 10}px`
  }
})
