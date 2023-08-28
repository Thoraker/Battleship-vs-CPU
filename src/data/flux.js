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
      hiddenShips: Array(100).fill(0),
      playerShips: Array(100).fill(0),
      cpuShips: Array(100).fill(0),
      cpuShots: Array(100).fill(0),
      playerTurn: true,
      cpuHits: [],
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
        const board = Array(100).fill(0);
        while (board.filter((num) => num !== 0).length !== 17) {
          setCpuShips(board);
        }
        setStorage({
          cpuShips: board,
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
        const playerBoatsCounter = getStorage().playerBoatsCounter;
        const newCpuHits = [...getStorage().cpuHits];
        const shot = Math.floor(Math.random() * 100);
        const newPlayerShips = [...getStorage().playerShips];
        const newShots = [...getStorage().cpuShots];
        if (newCpuHits.length === 0) {
          newShots[shot] === 0
            ? (newShots[shot] = 1)
            : getActions().cpuPlayer();
        }
        if (newPlayerShips[shot] === 0) newPlayerShips[shot] = 6;
        else {
          playerBoatsCounter[newPlayerShips[shot]] -= 1;
          playerBoatsCounter[newPlayerShips[shot]] === 0
            ? alert(`You sunk my Ship!`)
            : null;
          newPlayerShips[shot] = 7;
          newCpuHits.push(shot);
        }
        setStorage({
          playerShips: newPlayerShips,
          cpuShots: newShots,
          cpuHits: newCpuHits,
        });
      },
    },
  };
}
