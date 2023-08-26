/**
 * Sets the carrier on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export function setCarrier(index, isHorizontal, boardArray) {
  if (isHorizontal)
    if (index % 10 < 6) {
      for (let boatCells = 0; boatCells < 5; boatCells++) {
        boardArray[index + boatCells] = 1;
      }
    } else {
      let row = Math.floor(index / 10);
      for (let boatCells = 0; boatCells < 5; boatCells++) {
        boardArray[row * 10 + 5 + boatCells] = 1;
      }
    }
  else {
    if (index < 60) {
      for (let boatCells = 0; boatCells < 5; boatCells++) {
        boardArray[index + boatCells * 10] = 1;
      }
    } else {
      for (let boatCells = 0; boatCells < 5; boatCells++) {
        boardArray[(index % 10) + 50 + boatCells * 10] = 1;
      }
    }
  }
}

/**
 * Sets the Battleship on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export function setBattleship(index, isHorizontal, boardArray) {
  if (isHorizontal)
    if (index % 10 < 7) {
      for (let boatCells = 0; boatCells < 4; boatCells++) {
        boardArray[index + boatCells] = 2;
      }
    } else {
      let row = Math.floor(index / 10);
      for (let boatCells = 0; boatCells < 4; boatCells++) {
        boardArray[row * 10 + 6 + boatCells] = 2;
      }
    }
  else {
    if (index < 60) {
      for (let boatCells = 0; boatCells < 4; boatCells++) {
        boardArray[index + boatCells * 10] = 2;
      }
    } else {
      for (let boatCells = 0; boatCells < 4; boatCells++) {
        boardArray[(index % 10) + 60 + boatCells * 10] = 2;
      }
    }
  }
}

/**
 * Sets the Cruiser on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export function setCruiser(index, isHorizontal, boardArray) {
  if (isHorizontal)
    if (index % 10 < 8) {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[index + boatCells] = 3;
      }
    } else {
      let row = Math.floor(index / 10);
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[row * 10 + 7 + boatCells] = 3;
      }
    }
  else {
    if (index < 60) {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[index + boatCells * 10] = 3;
      }
    } else {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[(index % 10) + 70 + boatCells * 10] = 3;
      }
    }
  }
}

/**
 * Sets the Submarine on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export function setSubmarine(index, isHorizontal, boardArray) {
  if (isHorizontal)
    if (index % 10 < 8) {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[index + boatCells] = 4;
      }
    } else {
      let row = Math.floor(index / 10);
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[row * 10 + 7 + boatCells] = 4;
      }
    }
  else {
    if (index < 60) {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[index + boatCells * 10] = 4;
      }
    } else {
      for (let boatCells = 0; boatCells < 3; boatCells++) {
        boardArray[(index % 10) + 70 + boatCells * 10] = 4;
      }
    }
  }
}

/**
 * Sets the Destroyer on the board at the specified index at the specified orientation.
 *
 * @param {number} index - The index where the carrier will be placed on the board.
 * @param {boolean} isHorizontal - Specifies whether the carrier will be placed horizontally or vertically.
 * @param {number[]} boardArray - The array representing the game board.
 */
export function setDestroyer(index, isHorizontal, boardArray) {
  if (isHorizontal)
    if (index % 10 < 8) {
      for (let boatCells = 0; boatCells < 2; boatCells++) {
        boardArray[index + boatCells] = 5;
      }
    } else {
      let row = Math.floor(index / 10);
      for (let boatCells = 0; boatCells < 2; boatCells++) {
        boardArray[row * 10 + 8 + boatCells] = 5;
      }
    }
  else {
    if (index < 60) {
      for (let boatCells = 0; boatCells < 2; boatCells++) {
        boardArray[index + boatCells * 10] = 5;
      }
    } else {
      for (let boatCells = 0; boatCells < 2; boatCells++) {
        boardArray[(index % 10) + 80 + boatCells * 10] = 5;
      }
    }
  }
}
