import {
  getInputDirection
} from "./input.js"
export const snakeSpeed = 5;
// create the body of the sanake as an array for the x and y possition starting from the middle of the grid
const snakeBody = [{
  x: 11,
  y: 11
}]

let newSegments = 0

export function update() {
  addSegments()
  const inputDirection = getInputDirection()
  // starting from the second to last possition in reverse, the selected snake element, take the place of the element in front of him
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = {
      ...snakeBody[i]
    }

  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    //we create the div element of the snake body element starting from the deffined possition
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    //we add the class "snake" to add in the deffined proprietes from css
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)

  })
}


export function expandSnake(amount) {

  newSegments += amount
}

function equalPositions(pos1, pos2) {
  return (pos1.x === pos2.x && pos1.y === pos2.y)
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({
      ...snakeBody[snakeBody.length - 1]
    })
  }
  newSegments = 0
}

export function onSnake(position) {
  return snakeBody.some(segment => {
    return equalPositions(segment, position)

  })
}
