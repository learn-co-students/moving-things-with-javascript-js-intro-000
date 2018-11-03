const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom = '100px';

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  (left > 0) ? dodger.style.left = `${left - 15}px` : 0;
    // console.log(leftNumbers);
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  (left < 360) ? dodger.style.left = `${left + 15}px` : 0;
    // console.log(leftNumbers);
}

document.addEventListener('keydown', function(e) {
  // console.log(e.code);
  // console.log(e.which);
  (e.which === 37) ? moveDodgerLeft() : 0;
  (e.which === 39) ?moveDodgerRight() : 0;
});
