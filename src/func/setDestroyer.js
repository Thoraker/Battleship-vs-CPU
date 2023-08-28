/**
 * Sets the Destroyer on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the Destroyer will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the Destroyer will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export default function setDestroyer(index, isHorizontal, boardArray) {
  // Delete the cells previously marked as a destroyer
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 5) {
      boardArray[i] = 0;
    }
  }
  const boatCells = 2;
  // If isHorizontal is true fist validate the column of the clicked cell to place the Destroyer in the same row
  if (isHorizontal) {
    const isIndexInRange = index % 10 < 9;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i
        : Math.floor(index / 10) * 10 + 8 + i;
      boardArray[cellIndex] = 5;
    }
  }
  // Similar validation if isHorizontal is false but place the Destroyer in the same column
  else {
    const isIndexInRange = index < 90;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i * 10
        : (index % 10) + 80 + i * 10;
      boardArray[cellIndex] = 5;
    }
  }
}
