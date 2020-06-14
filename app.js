document.addEventListener('DOMContentLoaded', () => {

  const grids = document.querySelectorAll('.element div')
  const endResult = document.querySelector('#endResult')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1


  for (var i = 0; i < grids.length; i++)

    (function(index){
    //add an onclick to each square in your grid
      grids[i].onclick = function(){
      //if the square below your current square is taken, you can go ontop of it
        if(grids[index + 7].classList.contains('taken')){
          if (currentPlayer === 1) {
            grids[index].classList.add('taken')
            grids[index].classList.add('player-one')
            //change the player
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer === 2) {
            grids[index].classList.add('taken')
            grids[index].classList.add('player-two')
            //change the player
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
          //if the sqaure below your current swqaure is not taken, you can't go there
        } else alert('cant go here')
      }
    })(i)



})
