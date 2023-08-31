import { CpuFollowPlays, CpuRandomPlays } from '../func/cpuPlayer';
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
        while (cpuShips.filter((num) => num !== 0).length !== 17) {
          setCpuShips(cpuShips);
        }
        setStorage({
          cpuShips,
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
        let cpuNextTry = getStorage().cpuNextTry;
        let cpuMemoryBoard = getStorage().cpuMemoryBoard.slice();
        const playerShips = getStorage().playerShips.slice();
        const highestIndexHit = cpuMemoryBoard.findIndex(
          (num) => num !== 0 && num !== 6
        );
        const lowestIndexHit = cpuMemoryBoard.findLastIndex(
          (num) => num !== 0 && num !== 6
        );
        if (lowestIndexHit === -1) {
          CpuRandomPlays(playerShips, cpuMemoryBoard);
        } else {
          CpuFollowPlays(
            lowestIndexHit,
            highestIndexHit,
            playerShips,
            cpuMemoryBoard,
            cpuNextTry
          );
        }
        setStorage({
          playerShips,
          cpuNextTry,
          cpuMemoryBoard,
        });
      },
    },
  };
}
