import GameBoard from '../components/gameBoard';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

export default function GamePage() {
  const state = useContext(AppContext);

  const turns = {
    player: 'You Turn',
    cpu: 'CPU Turn',
  };

  const [turn, setTurn] = useState(turns.player);

  useEffect(() => {
    if (turn === turns.cpu) {
      setTimeout(() => {
        state.actions.cpuPlayer();
        setTurn(turns.player);
      }, 3000);
    }
  }, [turn]);

  /**
   * Disable the click event on the player board.
   *
   * @return {undefined} No return value.
   */
  const handlePlayerBoardClick = () => {};

  /**
   * Handles the click event, change turns and validate if there is a hit or a miss at given index.
   *
   * @param {number} index - The index of the clicked element.
   */
  const handleClick = (index) => {
    if (turn === turns.player) {
      state.storage.cpuShips[index] === 0
        ? (state.storage.hiddenShips[index] = 6)
        : (state.storage.hiddenShips[index] = 7);
      setTurn(turn === turns.player ? turns.cpu : turns.player);
    }
  };

  return (
    <>
      <h1>Battleships Game</h1>
      <h3>{turn}</h3>
      <div className='row'>
        <div className='col'>
          <h5>Your Ships</h5>
          <GameBoard
            visibleBoard={state.storage.playerShips}
            handleClick={handlePlayerBoardClick}
          />
        </div>
        <div className='col'>
          <h5>CPU Ships</h5>
          <GameBoard
            visibleBoard={state.storage.hiddenShips}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
