const app = "I don't do much."
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
  dodger.style.left = `${left - 5}px`
}
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 360) {
  dodger.style.left = `${left + 5}px`
}
}

//why won't this function work? I added a right attrivute to the dodger id
// function moveDodgerRight() {
//   var rightNumbers = dodger.style.right.replace('px', '')
//   var right = parseInt(rightNumbers, 10)
//   console.log(dodger.style.right);
//
//   if (right < 360) {
//     dodger.style.right = `${right + 1}px`
//   }
// }

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }else if (e.which === 39){
    moveDodgerRight();
}
})

$(document).ready(function(){
  // call functions here
  moveDodgerRight();
  moveDodgerLeft();
});
