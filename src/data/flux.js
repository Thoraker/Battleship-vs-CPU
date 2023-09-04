import setCpuShips from '../func/setCpuShips';

/**
 * Generates a new state object.
 *
 * @param {object} getStorage - a function that retrieves storage
 * @param {object} getActions - a function that retrieves actions
 * @param {function} setStorage - a function that sets storage
 * @return {object} - the new state object
 */
export default function getState({ getStorage, getActions, setStorage }) {
  return {
    storage: {
      playerShips: Array(100).fill(0),
      cpuShips: Array(100).fill(0),
      cpuMemoryBoard: Array(100).fill(0),
      cellsLefts: [],
      cpuNextTry: 'left',
      cpuBoatsCounter: {
        1: 5,
        2: 4,
        3: 3,
        4: 3,
        5: 2,
      },
      playerBoatsCounter: {
        1: 5,
        2: 4,
        3: 3,
        4: 3,
        5: 2,
      },
    },
    actions: {
      /**
       * Creates a new board for the CPU at the start of the game and store in the global state.
       *
       * @return {undefined} No return value.
       */
      loadInitialData: () => {
        const cpuShips = Array(100).fill(0);
        const cellsLefts = [];
        while (cpuShips.filter((num) => num !== 0).length !== 17) {
          setCpuShips(cpuShips);
        }
        for (let i = 0; i < 100; i++) {
          cellsLefts.push(i);
        }
        setStorage({
          cpuShips,
          cellsLefts,
        });
      },
      /**
       * Sets the player's board in the storage.
       *
       * @param {object} board - The player's board to be stored.
       */
      setPlayerBoard: (board) => {
        setStorage({
          playerShips: board,
        });
      },
      /**
       * Simulates the behavior of the CPU player in the game calling random shots.
       *
       * @return {undefined} This function does not return a value.
       */
      cpuPlayer: () => {
        if (getStorage().cpuMemoryBoard.includes(7)) {
          getActions().CpuFollowPlays();
        } else {
          getActions().CpuRandomPlays();
        }
      },
      CpuRandomPlays: () => {
        let cellsLefts = getStorage().cellsLefts;
        const cellIndexLefts = Math.floor(Math.random() * cellsLefts.length);
        const shot = cellsLefts[cellIndexLefts];
        cellsLefts.splice(cellIndexLefts, 1);
        let playerShips = [...getStorage().playerShips];
        let cpuMemoryBoard = [...getStorage().cpuMemoryBoard];
        let playerBoatsCounter = getStorage().playerBoatsCounter;
        let uncoveredCell = playerShips[shot];
        if (playerShips[shot] === 0) {
          cpuMemoryBoard[shot] = 6;
          playerShips[shot] = 6;
        } else {
          cpuMemoryBoard[shot] = uncoveredCell;
          playerShips[shot] = 7;
          playerBoatsCounter[uncoveredCell] =
            playerBoatsCounter[uncoveredCell] - 1;
        }
        setStorage({
          playerShips: playerShips,
          cpuMemoryBoard: cpuMemoryBoard,
          playerBoatsCounter: playerBoatsCounter,
          cellsLefts: cellsLefts,
        });
      },
      CpuFollowPlays: () => {
        let cpuMemoryBoard = [...getStorage().cpuMemoryBoard];
        let playerShips = [...getStorage().playerShips];
        let playerBoatsCounter = getStorage().playerBoatsCounter;
        let cpuNextTry = getStorage().cpuNextTry;
        let lowestIndexHit = cpuMemoryBoard.findIndex((num) => num === 7);
        let highestIndexHit = cpuMemoryBoard.findLastIndex((num) => num === 7);
        let shot = 0;
        if (cpuNextTry === 'left') {
          if (lowestIndexHit < 1) {
            shot = highestIndexHit + 1;
            cpuNextTry = 'right';
          } else {
            shot = lowestIndexHit - 1;
          }
        } else if (cpuNextTry === 'right') {
          if (highestIndexHit > 98) {
            shot = lowestIndexHit - 1;
            cpuNextTry = 'up';
          } else {
            shot = highestIndexHit + 1;
          }
        } else if (cpuNextTry === 'up') {
          if (lowestIndexHit < 10) {
            shot = highestIndexHit + 10;
            cpuNextTry = 'down';
          } else {
            shot = lowestIndexHit - 10;
          }
        } else if (cpuNextTry === 'down') {
          if (highestIndexHit > 89) {
            shot = lowestIndexHit - 10;
            cpuNextTry = 'left';
          } else {
            shot = highestIndexHit + 10;
          }
        }
        setStorage({
          cpuNextTry: cpuNextTry,
        });
        let cellsLefts = getStorage().cellsLefts;
        let uncoveredCell = playerShips[shot];
        if (uncoveredCell === 0) {
          cpuMemoryBoard[shot] = 6;
          playerShips[shot] = 6;
          if (cpuNextTry === 'left') cpuNextTry = 'right';
          else if (cpuNextTry === 'right') cpuNextTry = 'up';
          else if (cpuNextTry === 'up') cpuNextTry = 'down';
          else if (cpuNextTry === 'down') cpuNextTry = 'left';
          setStorage({
            cpuNextTry: cpuNextTry,
          });
        } else if (uncoveredCell === 6) {
          if (cpuNextTry === 'left') cpuNextTry = 'right';
          else if (cpuNextTry === 'right') cpuNextTry = 'up';
          else if (cpuNextTry === 'up') cpuNextTry = 'down';
          else if (cpuNextTry === 'down') cpuNextTry = 'left';
          setStorage({
            cpuNextTry: cpuNextTry,
          });
          getActions().CpuFollowPlays();
        } else {
          cpuMemoryBoard[shot] = 7;
          playerShips[shot] = 7;
          playerBoatsCounter[uncoveredCell] -= 1;
          if (playerBoatsCounter[uncoveredCell] === 0) {
            cpuMemoryBoard = getStorage().cpuMemoryBoard.map((element) => {
              if (element === 7) {
                element = 6;
              }
            });
            alert('I sunk your Ship!');
          }
          if (
            playerBoatsCounter[1] === 0 &&
            playerBoatsCounter[2] === 0 &&
            playerBoatsCounter[3] === 0 &&
            playerBoatsCounter[4] === 0 &&
            playerBoatsCounter[5] === 0
          ) {
            alert('I Win!');
            return;
          }
        }
        cellsLefts.splice(shot, 1);
        setStorage({
          playerShips: playerShips,
          cpuMemoryBoard: cpuMemoryBoard,
          playerBoatsCounter: playerBoatsCounter,
          cpuNextTry: cpuNextTry,
          cellsLefts: cellsLefts,
        });
      },
    },
  };
}
