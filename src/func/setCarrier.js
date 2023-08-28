/**
 * Sets the Carrier on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the Carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the Carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export default function setCarrier(index, isHorizontal, boardArray) {
  // Delete the cells previously marked as a Carrier
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 1) {
      boardArray[i] = 0;
    }
  }
  const boatCells = 5;
  // If isHorizontal is true fist validate the column of the clicked cell to place the Carrier in the same row
  if (isHorizontal) {
    const isIndexInRange = index % 10 < 6;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i
        : Math.floor(index / 10) * 10 + 5 + i;
      boardArray[cellIndex] = 1;
    }
  }
  // Similar validation if isHorizontal is false but place the Carrier in the same column
  else {
    const isIndexInRange = index < 60;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i * 10
        : (index % 10) + 50 + i * 10;
      boardArray[cellIndex] = 1;
    }
  }
}
