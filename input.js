let inputDirection = {
  x: 0,
  y: 0
}
let lastInputDirection = {
  x: 0,
  y: 0
}
//event listener that changes the direction of the snake based of the inputs of the arrow keys with if functions that checks if the walking direction so that we can't turn arrownd on the same axys
window.addEventListener('keydown', e => {
  switch (e.key) {

    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = {
        x: 0,
        y: -1
      }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = {
        x: 0,
        y: 1
      }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = {
        x: -1,
        y: 0
      }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = {
        x: 1,
        y: 0
      }
      break
  }



})
export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
