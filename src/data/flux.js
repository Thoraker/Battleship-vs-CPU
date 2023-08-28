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
    },
    actions: {
      loadInitialData: () => {
        const board = Array(100).fill(0);
        while (board.filter((num) => num !== 0).length !== 17) {
          setCpuShips(board);
        }
        console.log(board.filter((num) => num !== 0).length);
        setStorage({
          cpuShips: board,
        });
      },
      setPlayerBoard: (board) => {
        setStorage({
          playerShips: board,
        });
      },
      cpuPlayer: () => {
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
