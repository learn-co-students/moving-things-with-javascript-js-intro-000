const app = "I don't do much."
//65 is A, 68 is D.

document.addEventListener('keydown', (e)=>{
  // stuff doesn't move if i put this outside.
  // doesn't matter that it has to be outside other than console inspection.
  var dodger = document.getElementById('dodger');
  var width = parseInt($("#dodger").css("width").replace('px',''), 10);
    // for some reason "dodger.style.width" doesn't access it.
    // "dodger.style.right" gives null value, doesn't autocalc.
  var leftEdge = parseInt(dodger.style.left.replace('px',''), 10)
  var rightEdge = leftEdge + width;
  var rightFrame = parseInt($("#game").css("width").replace('px',''), 10);

  if (e.which === 65 && leftEdge > 0){
    console.log("moving left");
    dodger.style.left= `${leftEdge - 5}px`;
  } else if (e.which === 68 && rightEdge < rightFrame){
    console.log("moving right");
    dodger.style.left= `${leftEdge + 5}px`;
  }
})
