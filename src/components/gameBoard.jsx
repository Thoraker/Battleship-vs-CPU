import PropTypes from 'prop-types';
import Cell from './cell';
import { BorderLatitude } from './borderLatitude';
import { BorderLongitude } from './borderLongitude';

/**
 * Render the board for the player and for the CPU.
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
