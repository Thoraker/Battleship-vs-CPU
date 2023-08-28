/**
 * Sets the Cruiser on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the Cruiser will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the Cruiser will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export default function setCruiser(index, isHorizontal, boardArray) {
  // Delete the cells previously marked as a cruiser
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 3) {
      boardArray[i] = 0;
    }
  }
  const boatCells = 3;
  // If isHorizontal is true fist validate the column of the clicked cell to place the Cruiser in the same row
  if (isHorizontal) {
    const isIndexInRange = index % 10 < 8;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i
        : Math.floor(index / 10) * 10 + 7 + i;
      boardArray[cellIndex] = 3;
    }
  }
  // Similar validation if isHorizontal is false but place the Cruiser in the same column
  else {
    const isIndexInRange = index < 80;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i * 10
        : (index % 10) + 70 + i * 10;
      boardArray[cellIndex] = 3;
    }
  }
}
