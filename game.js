/** setup a game loop, a function that updates itself over again**/
import {update as updateSnake, draw as drawSnake, snakeSpeed} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
  if(gameOver){
    alert('you lose')
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime-lastRenderTime)/ 1000;
  if (secondsSinceLastRender < 1 /snakeSpeed) return
  lastRenderTime=currentTime;



/** the loop for the updating of the game**/

  update()

  /** the loop for the drawing of the game**/

  draw()
}

  window.requestAnimationFrame(main)

  function update(){
    updateSnake()
    updateFood()
    // checkDeath()

  }

  function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

  }

// function CheckDreath(){
// gameOver = ousidegrid(getSnakeHead()) || snakeIntersection()
//
// }
