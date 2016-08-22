const app = "I don't do much."

var dodger = document.getElementById('dodger');

document.addEventListener('keydown' function(e){
	if(e.which === 39){
		moveRight();
	};
});

function moveRight(argument) {
	// body...
	var rightNumber = dodger.style.right.replce('px', '');
	var right = parseInt(rightNumber, 10);

	if(right > 0){
      dodger.style.right = `${right -1}px`;
	};
};