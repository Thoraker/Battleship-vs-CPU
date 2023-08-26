import { Link } from 'react-router-dom';
import GameBoard from '../components/gameBoard';
import { useContext, useState } from 'react';
import { AppContext } from '../App';
import {
  setBattleship,
  setCarrier,
  setCruiser,
  setDestroyer,
  setSubmarine,
} from '../func/setShips';

function SetupPage() {
  const state = useContext(AppContext);
  const [board, setBoard] = useState(state.storage.playerShips);
  const [shipType, setShipType] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

  function handleClick(index) {
    let newBoard = [...board];

    if (shipType === 0) return;
    else if (shipType === 1) {
      newBoard.map((item) => (item === 1 ? (item = 0) : null));
      setBoard(newBoard);
      setCarrier(index, horizontal, newBoard);
      setBoard(newBoard);
    } else if (shipType === 2) {
      newBoard.map((item) => (item === 1 ? 0 : item));
      setBoard(newBoard);
      setBattleship(index, horizontal, newBoard);
      setBoard(newBoard);
    } else if (shipType === 3) {
      newBoard.map((item) => (item === 1 ? 0 : item));
      setBoard(newBoard);
      setCruiser(index, horizontal, newBoard);
      setBoard(newBoard);
    } else if (shipType === 4) {
      newBoard.map((item) => (item === 1 ? 0 : item));
      setBoard(newBoard);
      setSubmarine(index, horizontal, newBoard);
      setBoard(newBoard);
    } else if (shipType === 5) {
      newBoard.map((item) => (item === 1 ? 0 : item));
      setBoard(newBoard);
      setDestroyer(index, horizontal, newBoard);
      setBoard(newBoard);
    }
    setShipType(0);
  }

  return (
    <>
      <h1>Setup Page</h1>
      <p>Place your Boats on the Grid</p>
      <div className='row border border-danger'>
        <div className='col'>
          <h4>Your Ships</h4>
          <GameBoard visibleBoard={board} handleClick={handleClick} />
        </div>
        <div className='col g-2'>
          <h4>Available Ships</h4>

          <div className='col'>
            <button
              type='button'
              className='btn btn-primary btn-sm w-25'
              onClick={() => {
                setShipType(1);
                setHorizontal(!horizontal);
              }}
              disabled={!(shipType === 0 || shipType === 1)}
            >
              {horizontal ? 'Horizontal ' : 'Vertical '}Carrier
            </button>
            <span>5 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm w-25'
              onClick={() => {
                setShipType(2);
                setHorizontal(!horizontal);
              }}
              disabled={!(shipType === 0 || shipType === 2)}
            >
              {horizontal ? 'Horizontal ' : 'Vertical '}Battleship
            </button>
            <span>4 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm w-25'
              onClick={() => {
                setShipType(3);
                setHorizontal(!horizontal);
              }}
              disabled={!(shipType === 0 || shipType === 3)}
            >
              {horizontal ? 'Horizontal ' : 'Vertical '}Cruiser
            </button>
            <span>3 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm w-25'
              onClick={() => {
                setShipType(4);
                setHorizontal(!horizontal);
              }}
              disabled={!(shipType === 0 || shipType === 4)}
            >
              {horizontal ? 'Horizontal ' : 'Vertical '}Submarine
            </button>
            <span>3 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm w-25'
              onClick={() => {
                setShipType(5);
                setHorizontal(!horizontal);
              }}
              disabled={!(shipType === 0 || shipType === 5)}
            >
              {horizontal ? 'Horizontal ' : 'Vertical '}Destroyer
            </button>
            <span>2 cells long</span>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm w-25'
              onClick={() => state.actions.setPlayerBoard(board)}
              disabled={!(shipType === 0 || shipType === 2)}
            >
              Finish
            </button>
            <span>Setup Complete</span>
          </div>
          <Link className='btn btn-primary' to='/game' role='button'>
            Start
          </Link>
        </div>
      </div>
    </>
  );
}
export default SetupPage;
