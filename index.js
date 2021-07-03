const app = "I don't do much."
const keyCodeLeft = 37;
const keyCodeUp = 38;
const keyCodeRight = 39;
const keyCodeDown = 40;
const numSpeed = 10;


$(function() {
  var dodger = document.getElementById('dodger');
  console.log('DOM loaded...');
  console.log(dodger.style);
  
  document.addEventListener('keydown', function(event) {
    var posLeft  = parseInt(dodger.style.left, 10);
    var posBottom  = parseInt(dodger.style.bottom, 10);
    var prvPosLeft = posLeft;
    var prvPosBottom = posBottom;
    const numHeight = dodger.parentElement.offsetHeight;
    const numWidth = dodger.parentElement.offsetWidth;

    // console.log(event.which);
    switch (event.which) {
      case keyCodeLeft:
        posLeft -= numSpeed;
        if (posLeft<0) {
          posLeft = 0;
        }
        break;
      case keyCodeRight:
        posLeft += numSpeed;
        if (posLeft>numWidth-dodger.offsetWidth) {
          posLeft = numWidth-dodger.offsetWidth;
        }
        break;
      case keyCodeUp:
        posBottom += numSpeed;
        if (posBottom>numHeight-dodger.offsetHeight) {
          posBottom = numHeight-dodger.offsetHeight;
        }
        break;
      case keyCodeDown:
        posBottom -= numSpeed;
        if (posBottom<0) {
          posBottom = 0;
        }
        break;
      default:
    } 
    if ((prvPosBottom !== posBottom) || (prvPosLeft !== posLeft)) {
      console.log(`--- Pos changed - (${prvPosLeft}, ${prvPosBottom}) -> ${posLeft}, ${posBottom}`);
      if (prvPosBottom !== posBottom) {
        dodger.style.bottom = posBottom+'px';
      }
      if (prvPosLeft !== posLeft) {
        dodger.style.left = posLeft+'px';
      }
    }
  });
  
  dodger.style.backgroundColor = 'green';
  // dodger.style.backgroundColor = '#FF69B4';
});

console.log('dodger app...');