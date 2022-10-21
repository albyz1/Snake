import {
  onSnake,
  expandSnake
} from './snake.js'
import {randomGridPosition} from './grid.js'
let food = randomGridPosition()

//how much the snake grows when he eats the food
const expansionRate = 1

export function update() {

  if (onSnake(food)) {
    expandSnake(expansionRate)
    food = randomGridPosition()

  }
}

export function draw(gameBoard) {

  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition(){

  let newFoodPosition

  while (newFoodPosition == null || onSnkae(newFoodPosition)) {
    newFoodPosition = randomGridPosition()

  }
}
