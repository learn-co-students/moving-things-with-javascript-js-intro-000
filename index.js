const app = "I don't do much."

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10);
if (left > 0) {
    dodger.style.left = `${left - 5}px`;
}
}

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10);
if (left < 360) {
    dodger.style.left = `${left + 5}px`;
}
}

document.addEventListener('keydown', function(key) {
    if (key.which == 37) {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function(key) {
    if (key.which == 39) {
        moveDodgerRight()
    }
})
