/**
 * Sets the Battleship on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the Battleship will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the Battleship will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export default function setBattleship(index, isHorizontal, boardArray) {
  // Delete the cells previously marked as a Battleship
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 2) {
      boardArray[i] = 0;
    }
  }
  const boatCells = 4;
  // If isHorizontal is true fist validate the column of the clicked cell to place the Battleship in the same row
  if (isHorizontal) {
    const isIndexInRange = index % 10 < 7;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i
        : Math.floor(index / 10) * 10 + 6 + i;
      boardArray[cellIndex] = 2;
    }
  }
  // Similar validation if isHorizontal is false but place the Battleship in the same column
  else {
    const isIndexInRange = index < 70;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i * 10
        : (index % 10) + 60 + i * 10;
      boardArray[cellIndex] = 2;
    }
  }
}
