import { Link } from 'react-router-dom';
import GameBoard from '../components/gameBoard';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

function SetupPage() {
  const state = useContext(AppContext);
  const [newBoard, setNewBoard] = useState([]);

  function handleClick() {}

  return (
    <>
      <h1>Setup Page</h1>
      <div className='row'>
        <div className='col'>
          <p>Place your Boats on the Grid</p>
          <GameBoard
            visibleBoard={state.storage.playerShips}
            handleClick={handleClick}
          />
        </div>
      </div>
      <Link className='btn btn-primary' to='/game' role='button'>
        Start
      </Link>
    </>
  );
}
export default SetupPage;
