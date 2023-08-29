import GameBoard from '../components/gameBoard';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

/**
 * Contains the Game logic for the Page.
 *
 * @returns {JSX.Element}
 */
export default function GamePage() {
  const { storage, actions } = useContext(AppContext);
  const [turn, setTurn] = useState(true);
  useEffect(() => {
    if (!turn) {
      setTimeout(() => {
        actions.cpuPlayer();
        setTurn(!turn);
      }, 2000);
    }
  }, [turn]);

  /**
   * Disable the click event on the player board.
   *
   * @return {undefined} No return value.
   */
  const handlePlayerBoardClick = () => {
    return;
  };

  /**
   * Handles the click event, change turns and validate if there is a hit or a miss at given index.
   *
   * @param {number} index - The index of the clicked element.
   */
  const handleClick = (index) => {
    if (turn) {
      if (storage.cpuShips[index] === 0) {
        storage.hiddenShips[index] = 6;
      } else {
        storage.hiddenShips[index] = 7;
      }
      storage.cpuBoatsCounter[storage.cpuShips[index]] -= 1;
      if (storage.cpuBoatsCounter[storage.cpuShips[index]] === 0) {
        alert('You sunk my Ship!');
      }
      setTurn(!turn);
    }
  };

  return (
    <>
      <h1>Battleships Game</h1>
      <h3>{turn ? 'Your Turn' : 'CPU Turn'}</h3>
      <div className='row'>
        <div className='col p-0'>
          <h5>Your Ships</h5>
          <GameBoard
            visibleBoard={storage.playerShips}
            handleClick={handlePlayerBoardClick}
          />
        </div>
        <div className='col p-0'>
          <h5>CPU Ships</h5>
          <GameBoard
            visibleBoard={storage.hiddenShips}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
