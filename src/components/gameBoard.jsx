import PropTypes from 'prop-types';
import Cell from './cell';

// Arrays to set the borders of the board
import { borderLatitude, borderLongitude } from '../assets/bordersArrays';

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
        <div className='col-1'>
          {borderLatitude.map((latitude, index) => (
            <div key={index} className='border border-dark text-center me-0'>
              {latitude}
            </div>
          ))}
        </div>
        <div className='col-5 px-0'>
          <div className='row'>
            {borderLongitude.map((longitude, index) => (
              <div key={index} className='col-1 border border-dark text-center'>
                {index + 1}
              </div>
            ))}
            {visibleBoard.map((_, index) => {
              return (
                <Cell key={index} index={index} updateBoard={updateBoard}>
                  {visibleBoard[index]}
                </Cell>
              );
            })}
            {borderLongitude.map((longitude, index) => (
              <div key={index} className='col-1 border border-dark text-center'>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className='col-1'>
          {borderLatitude.map((latitude, index) => (
            <div key={index} className='border border-dark text-center me-0'>
              {latitude}
            </div>
          ))}
        </div>
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
