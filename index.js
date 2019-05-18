const app = "I don't do much."
let dodger = document.getElementById('dodger');
let gameDiv = document.getElementById('game');
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left,10);
  if (left>0) {
    dodger.style.left = `${left-1}px`;
  }
};
function moveDodgerRight() {
  let left = parseInt(dodger.style.left,10);
  let divWidth = parseInt(gameDiv.style.width,10);
  let dodgerWidth = parseInt(dodger.style.width,10);
  //if (left<divWidth-dodgerWidth)
  {
    dodger.style.left = `${left+1}px`;
  }
};
dodger.style.backgroundColor = '#FF69B4';
document.addEventListener('keydown', function(e) {
  if(e.which===37) {moveDodgerLeft();}
  else if(e.which===39) {moveDodgerRight();};
});
