
const app = "I don't do much."
var dodger = document.getElementById('dodger');



function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
    console.log(leftNumbers);
    }
  };

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 10}px`
    console.log(leftNumbers);
    }
};



$(document).ready(function() {
  // code to be executed goes here

  document.body.addEventListener('keydown', function(event) {
    console.log(event.code);
    console.log(event.which);
    if (event.which === 37) {
      moveDodgerLeft();
    }
    if (event.which === 39) {
      moveDodgerRight();

    }
  });

});
