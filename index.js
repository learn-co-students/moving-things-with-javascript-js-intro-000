const app = "I don't do much."
/*function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}*/

/*document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})*/

/*While this isn't tested, and this was meant as a code-along, we have not yet implemented moving the dodger to the right. Can you do it?

Think about what needs to change to make a moveDodgerRight() function. We'll need another e.which in the event listener, and instead of moving the dodger ${left - 1}px, we'll be moving it ${left + 1}px (or ${right - 1}px, if you prefer). To prevent the dodger from escaping off the right-hand side, you can make sure that dodger.style.right is always greater than 0px.*/
var dodger = document.getElementById('dodger'); // select the dodger to move

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', ''); // change the styling placement
  var right = parseInt(rightNumbers, 10);
  
  if (right > 0) {
    dodger.style.right = `${right - 1}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.which == 39) {
    moveDodgerright();
  }
});
