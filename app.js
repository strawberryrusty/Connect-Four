
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

    //check the gameboard for a win or lose (brute force)
  function winCheck(){
    //make an array that shows alls winning arrays
    const winArr = [
      [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
      [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
      [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
      [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
      [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
      [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
      [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
      [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
      [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
      [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
    ]

    //now comparing the values in of our winning arrays with the grid
    for(let y=0; y < winArr.length; y++) {
      const grid1 = grids[winArr[y][0]]
      const grid2 = grids[winArr[y][1]]
      const grid3 = grids[winArr[y][2]]
      const grid4 = grids[winArr[y][3]]


      //now check those arrays to see if they all have the class of player-one
      if(grid1.classList.contains('player-one') &&
         grid2.classList.contains('player-one') &&
         grid3.classList.contains('player-one') &&
         grid4.classList.contains('player-one')){

        //make player1 the winner
        endResult.innerHTML = 'PLAYER 1 IS THE WINNER'

      }

      else if(grid1.classList.contains('player-two') &&
         grid2.classList.contains('player-two') &&
         grid3.classList.contains('player-two') &&
         grid4.classList.contains('player-two')){

        //make player1 the winner
        endResult.innerHTML = 'PLAYER 2 IS THE WINNER'
      }
    }
  }


  //add an event listener to each square that will trigger the checkBoard function on click
  grids.forEach(grid => grid.addEventListener('click', winCheck)

})
