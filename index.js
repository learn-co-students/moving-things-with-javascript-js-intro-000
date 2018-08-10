var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '100px';

dodger.style.bottom = '0px';

document.addEventListener('keydown', function(e) {
    //console.log("--> " + e.which);

    if (e.which === 37) {
        // var leftNumbers = dodger.style.left.replace('px', '');
        // var left = parseInt(leftNumbers, 10);
        //
        // dodger.style.left = `${left - 1}px`;

        moveDodgerLeft();
    } else if (e.which === 39) {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
console.log(left);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace('px', '');
    var right = parseInt(rightNumbers, 10);
console.log(right);
    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}
