import PropTypes from 'prop-types';
import Cell from './cell';
import { BorderLatitude } from './borderLatitude';
import { BorderLongitude } from './borderLongitude';

// Arrays to set the borders of the board

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
        <BorderLatitude />
        <div className='col-5 m-0 p-0'>
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
      </div>
    </>
  );
}

export default GameBoard;

GameBoard.propTypes = {
  visibleBoard: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
