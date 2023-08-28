import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

// Global context
import { AppContext } from '../App';

import GameBoard from '../components/gameBoard';
import setCarrier from '../func/setCarrier';
import setBattleship from '../func/setBattleship';
import setCruiser from '../func/setCruiser';
import setSubmarine from '../func/setSubmarine';
import setDestroyer from '../func/setDestroyer';

function SetupPage() {
  const state = useContext(AppContext);
  const [board, setBoard] = useState(state.storage.playerShips);
  const [shipType, setShipType] = useState(0); // Manage the type of ship to place on the board (Maybe don't need to be a state variable)
  const [horizontal, setHorizontal] = useState(false);

  function handleClick(index) {
    let newBoard = [...board];
    if (shipType === 0) {
      return;
    } else if (shipType === 1) {
      setCarrier(index, horizontal, newBoard);
    } else if (shipType === 2) {
      setBattleship(index, horizontal, newBoard);
    } else if (shipType === 3) {
      setCruiser(index, horizontal, newBoard);
    } else if (shipType === 4) {
      setSubmarine(index, horizontal, newBoard);
    } else if (shipType === 5) {
      setDestroyer(index, horizontal, newBoard);
    }
    setBoard(newBoard);
    setShipType(0);
  }

  return (
    <>
      <h1>Setup Page</h1>
      <h3>Place your Boats on the Grid</h3>
      <div className='row'>
        <div className='col'>
          <h5>Your Ships</h5>
          <GameBoard visibleBoard={board} handleClick={handleClick} />
        </div>
        <div className='col g-2'>
          <h5>Available Ships</h5>
          <button
            className='btn btn-outline-primary btn-sm w-25'
            onClick={() => setHorizontal(!horizontal)}
          >
            {horizontal ? 'Horizontal' : 'Vertical'}
          </button>
          <div className='col'>
            <button
              type='button'
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => {
                setShipType(1);
              }}
              disabled={!(shipType === 0 || shipType === 1)}
            >
              Carrier
            </button>
            <span>5 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => {
                setShipType(2);
              }}
              disabled={!(shipType === 0 || shipType === 2)}
            >
              Battleship
            </button>
            <span>4 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => {
                setShipType(3);
              }}
              disabled={!(shipType === 0 || shipType === 3)}
            >
              Cruiser
            </button>
            <span>3 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => {
                setShipType(4);
              }}
              disabled={!(shipType === 0 || shipType === 4)}
            >
              Submarine
            </button>
            <span>3 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => {
                setShipType(5);
              }}
              disabled={!(shipType === 0 || shipType === 5)}
            >
              Destroyer
            </button>
            <span>2 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-outline-primary btn-sm w-25'
              onClick={() => state.actions.setPlayerBoard(board)}
              disabled={!(shipType === 0)}
            >
              Finish
            </button>
            <span>Setup Complete</span>
          </div>
          <Link
            className='btn btn-outline-primary w-25'
            to={shipType === 0 ? '/game' : '#'}
            role='button'
          >
            Start
          </Link>
        </div>
      </div>
    </>
  );
}
export default SetupPage;
