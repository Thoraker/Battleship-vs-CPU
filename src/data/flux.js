import setCpuShips from '../func/setCpuShips';

/**
 * Generates the object for global state.
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
       */
      setPlayerBoard: (board) => {
        setStorage({
          playerShips: board,
        });
      },
      /**
       * Simulates the behavior of the CPU player in the game.
       */
      cpuPlayer: () => {
        if (getStorage().cpuMemoryBoard.includes(7)) {
          getActions().CpuFollowPlays();
        } else {
          getActions().CpuRandomPlays();
        }
      },

      /**
       * Simulates the behavior of the CPU player in the game calling random shots.
       */
      CpuRandomPlays: () => {
        const { cellsLefts, playerShips, cpuMemoryBoard, playerBoatsCounter } =
          getStorage();

        const cellIndexLefts = Math.floor(Math.random() * cellsLefts.length);
        const shot = cellsLefts[cellIndexLefts];
        cellsLefts.splice(cellIndexLefts, 1);

        const uncoveredCell = playerShips[shot];
        if (uncoveredCell === 0) {
          cpuMemoryBoard[shot] = 6; // Set hits and misses in the board for the cpu to keep track
          playerShips[shot] = 6;
        } else {
          cpuMemoryBoard[shot] = 7;
          playerShips[shot] = 7; // Set hits and misses in the board for the cpu to keep track
          playerBoatsCounter[uncoveredCell] -= 1;
        }

        setStorage({
          playerShips,
          cpuMemoryBoard,
          playerBoatsCounter,
          cellsLefts,
        });
      },

      /**
       * Simulates the behavior of the CPU player in the game calling following shots after hit.
       */
      CpuFollowPlays: () => {
        const storage = getStorage();
        let shot = 0;
        let cpuMemoryBoard = [...storage.cpuMemoryBoard];
        let playerShips = [...storage.playerShips];
        let playerBoatsCounter = storage.playerBoatsCounter;
        let cpuNextTry = storage.cpuNextTry;
        let lowestIndexHit = cpuMemoryBoard.findIndex((num) => num === 7); // Set the lowest index for followup shots
        let highestIndexHit = cpuMemoryBoard.findLastIndex((num) => num === 7); // Set the highest index for followup shots
        let cellsLefts = storage.cellsLefts;
        // Try shots from direction set by cpuNextTry
        if (cpuNextTry === 'left') {
          if (lowestIndexHit < 1) {
            // Handle the borders of the board
            shot = highestIndexHit + 1;
            cpuNextTry = 'right';
          } else {
            shot = lowestIndexHit - 1;
          }
        } else if (cpuNextTry === 'right') {
          if (highestIndexHit > 98) {
            // Handle the borders of the board
            shot = lowestIndexHit - 1;
            cpuNextTry = 'up';
          } else {
            shot = highestIndexHit + 1;
          }
        } else if (cpuNextTry === 'up') {
          if (lowestIndexHit < 10) {
            // Handle the borders of the board
            shot = highestIndexHit + 10;
            cpuNextTry = 'down';
          } else {
            shot = lowestIndexHit - 10;
          }
        } else if (cpuNextTry === 'down') {
          if (highestIndexHit > 89) {
            // Handle the borders of the board
            shot = lowestIndexHit - 10;
            cpuNextTry = 'left';
          } else {
            shot = highestIndexHit + 10;
          }
        }
        setStorage({
          cpuNextTry: cpuNextTry, // Update cpuNextTry in the storage
        });

        let uncoveredCell = playerShips[shot];
        if (uncoveredCell === 0) {
          cpuMemoryBoard[shot] = 6; // Set hits and misses in the board for the cpu to keep track
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
          cpuMemoryBoard[shot] = 7; // Set hits and misses in the board for the cpu to keep track
          playerShips[shot] = 7;
          playerBoatsCounter[uncoveredCell] -= 1;
          if (playerBoatsCounter[uncoveredCell] === 0) {
            // Validate if the player sunk a boat and delete hits when a boat is sunk to try random shots again
            cpuMemoryBoard = storage.cpuMemoryBoard.map((element) => {
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
