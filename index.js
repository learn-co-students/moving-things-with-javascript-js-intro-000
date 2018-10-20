var dodger = document.getElementById('dodger')
var game = document.getElementById('game')
var speed = 25

function moveDodgerLeft(){
  var leftNum = dodger.style.left.replace('px','')
  var left = parseInt(leftNum, 10)
  if (left > 0){
    if (left > speed){
      dodger.style.left = `${left-speed}px`
    } else {
      dodger.style.left = `0px`
    }
  }
}

function moveDodgerRight(){
  var leftNum = dodger.style.left.replace('px','')
  var left = parseInt(leftNum, 10)
  var right = left + dodger.offsetWidth
  var gameW = game.offsetWidth

  if (right < gameW){
    if (gameW - right > speed){
      dodger.style.left = `${left + speed}px`
    } else {
      dodger.style.left = `${gameW - dodger.offsetWidth}px`
    }
  }
}

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft()
	} else if (e.key === 'ArrowRight'){
    moveDodgerRight()
  }
})
