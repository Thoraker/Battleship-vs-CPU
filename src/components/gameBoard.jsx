import PropTypes from 'prop-types';
import Cell from './cell';

// Arrays to set the borders of the board
import { BorderLatitude, BorderLongitude } from './bordersComponents';

/**
 * Render the layout of the boats for the player or a hidden board for the CPU.
 *
 * @param {Array} visibleBoard - The array of visible ships.
 * @param {Array} shipsArranged - The children of the game board component.
 * @return {ReactNode} The rendered game board component.
 */
function GameBoard({ visibleBoard, handleClick }) {
  function updateBoard(index) {
    handleClick(index);
  }
  return (
    <>
      <div className='row'>
        <div className='col'></div>
        <BorderLatitude />
        <div className='col-5 px-0'>
          <BorderLongitude>
            {visibleBoard.map((element, index) => {
              return (
                <Cell
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  element={element}
                />
              );
            })}
          </BorderLongitude>
        </div>
        <BorderLatitude />
        <div className='col'></div>
      </div>
    </>
  );
}

export default GameBoard;

GameBoard.propTypes = {
  visibleBoard: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
