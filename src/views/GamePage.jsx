import GameBoard from '../components/gameBoard';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function GamePage() {
  const state = useContext(AppContext);

  const handleClick = () => {};

  return (
    <>
      <h1>Battleships Game</h1>
      <p>Take a shot</p>
      <div className='row'>
        <div className='col'>
          <h4>Your Ships</h4>
          <GameBoard
            visibleBoard={state.storage.playerShips}
            handleClick={handleClick}
          />
        </div>
        <div className='col'>
          <h4>CPU Ships</h4>
          <GameBoard
            visibleBoard={state.storage.hiddenShips}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
