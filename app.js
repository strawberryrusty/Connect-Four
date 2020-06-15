
//all the JS code is done through this event listener
document.addEventListener('DOMContentLoaded', () => {

  const grids = document.querySelectorAll('.element div')
  const endResult = document.querySelector('#endResult')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  //loop through each square
  for (var i = 0; i < grids.length; i++)

    (function(index){
    //here we are adding an onclick function everytime we click a square in our grid
      grids[i].onclick = function(){

      // if the grid below your current grid or 7 squares below has a classname of taken , you are allowed to click on this grid and claim it as your taken and can go.
        if(grids[index + 7].classList.contains('taken')){

          //if you can go and are player 1, add classname taken and playerone to that
          //square
          if (currentPlayer === 1) {
            grids[index].classList.add('taken')
            grids[index].classList.add('player-one')

            //change the player (do the same for player 2)
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer === 2) {
            grids[index].classList.add('taken')
            grids[index].classList.add('player-two')

            //change the player
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
          //if the grid below your current grid is not taken, you can't go there
        } else alert('cant go here')
      }
    })(i)



})
