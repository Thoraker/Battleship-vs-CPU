import PropTypes from 'prop-types';

/**
 * Renders a single cell element for the game board.
 */
export default function Cell({ element, updateBoard, index }) {
  const cellContent = {
    0: <i className='bi bi-circle'></i>,
    6: <i className='bi bi-circle-fill text-secondary'></i>,
    7: <i className='bi bi-circle-fill text-danger'></i>,
  };

  function handleClick() {
    updateBoard(index);
  }

  return (
    <div
      className='col-1 border border-secondary text-center bg-info p-0'
      onClick={handleClick}
    >
      {cellContent[element] || element}
    </div>
  );
}

Cell.propTypes = {
  element: PropTypes.number.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number,
};
