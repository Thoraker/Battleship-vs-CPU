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
      hiddenShips: Array(100).fill(null),
      playerShips: Array(100).fill(null),
      cpuShips: Array(100).fill(null),
      playerTurn: true,
    },
    actions: {
      /**
       * Set the initial state data.
       *
       * @return set 3 arrays in the storage
       */
      loadInitialData: () => {
        setStorage({
          cpuShips: Array(100).fill(null),
        });
      },
      setPlayerBoard: (board) => {
        setStorage({
          playerShips: board,
        });
      },
    },
  };
}
