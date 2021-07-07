const app = "I don't do much."
//Set Constant for directions
const leftDir = -1;
const rightDir = 1;

var positionNum
//returns dodger position as an integer value
function getNumericPosition(){
  var position = $("#dodger")[0].style.left.replace('px','');
  positionNum = parseInt(position,10);
}
//checks for Dodger at boundary, returns true if at boundary
function dodgerAtBoundary(){
  if (positionNum === 0){
    return "leftBoundary";
  }
  else if (positionNum === 360){
    return "rightBoundary";
  }
}
//Move left
function dodgerLeft(dir){
  if(dodgerAtBoundary() !== "leftBoundary"){
    $("#dodger")[0].style.left = `${positionNum+dir}px`;}
}
//Move Right
function dodgerRight(dir){
  if(dodgerAtBoundary() !== "rightBoundary"){
    $("#dodger")[0].style.left = `${positionNum+dir}px`;}
}

$(document).on("keydown",function(e){
  switch (e.which) {
//Left Arrow
    case 37:
      getNumericPosition();
      dodgerLeft(leftDir);
      break;
    case 39:
      getNumericPosition();
      dodgerRight(rightDir);
    default:
  }
})
