const app = "I don't do much."

//let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"

document.addEventListener('keydown', function(e){
  let leftNumber = dodger.style.left.replace('px','');
  let number = parseInt(leftNumber, 10);

  if(e.which === 37){
    moveDodgerLeft(number)
  }

  if(e.which === 39){
    moveDodgerRight(number)
  }
})

function moveDodgerLeft(number){
  dodger.style.left = `${number-1}px`;
}

function moveDodgerRight(number){
  dodger.style.left = `${number+1}px`;
}
