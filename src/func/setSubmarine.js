/**
 * Sets the Submarine on the board at the specified index at the specified orientation.
 */
export default function setSubmarine(index, isHorizontal, boardArray) {
  // Delete the cells previously marked as a submarine
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 4) {
      boardArray[i] = 0;
    }
  }
  const boatCells = 3;
  // If isHorizontal is true fist validate the column of the clicked cell to place the Submarine in the same row
  if (isHorizontal) {
    const isIndexInRange = index % 10 < 8;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i
        : Math.floor(index / 10) * 10 + 7 + i;
      boardArray[cellIndex] = 4;
    }
  }
  // Similar validation if isHorizontal is false but place the Submarine in the same column
  else {
    const isIndexInRange = index < 80;
    for (let i = 0; i < boatCells; i++) {
      const cellIndex = isIndexInRange
        ? index + i * 10
        : (index % 10) + 70 + i * 10;
      boardArray[cellIndex] = 4;
    }
  }
}
