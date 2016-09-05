var dodger = document.getElementById('dodger')


function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    if (left > 0) {
      dodger.style.left = `${left - 10}px`
    }
  }


function moveDodgerRight() {
  $(document).keydown(function(e) {
    switch(e.which) {
        case 39: var leftNumbers = dodger.style.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
        if (left <360) {
          dodger.style.left = `${left + 10}px`
        }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  })
}

$(document).ready(function(){
  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
    moveDodgerLeft()
    }
  })

  moveDodgerRight();
})
