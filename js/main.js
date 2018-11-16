
//get all the boxes
var game = document.body.querySelectorAll('.x')

//switch from x  to o
// addEventListener loop, if clicked it will add either
// and x or o depending on class name
// eachloop => game-board and add class named "x"

//function to add an x

//Selecting the whole game board
var board = document.body.querySelector('.game-board');

var clicked_board = board.addEventListener("click", function(event) {
  if (event.target.classList.contains('x')){
    event.target.innerHTML = "X"
    game.forEach(function(box){
      box.classList.remove("x")
      box.classList.add("o")
    })
  } else if (event.target.classList.contains('o')){
    event.target.innerHTML = "O"
    game.forEach(function(box){
      box.classList.remove("o")
      box.classList.add("x")
    })
  }
});
// 
// for (var = i; i < game.length; i++){
//
// }
