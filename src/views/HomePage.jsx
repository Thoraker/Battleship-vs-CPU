import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>Battleship Home Page</h1>
      <h3>Rules</h3>
      <ul role='rules'>
        <li>
          Ships can be placed horizontally or vertically, but not diagonally.
        </li>
        <li>You must place all five ships on the grid.</li>
        <li>
          Every ship must be completely on the grid. No ship can hang off the
          edge of the board.
        </li>
        <li>Ships cannot overlap each other.</li>
        <li>
          Once your ships are placed and the game has begun, you are not allowed
          to move your ships again.
        </li>
      </ul>
      <button role='button'>
        <Link to='/setup'>Start</Link>
      </button>
    </>
  );
}

export default HomePage;
