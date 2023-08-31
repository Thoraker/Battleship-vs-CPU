import PropTypes from 'prop-types';

export default function Cell({ element, updateBoard, index }) {
  // Object for the cell content, if you need to change the icons for every ship do it here
  const cellContent = {
    0: <i className='bi bi-circle'></i>, // Empty cell (no shot yet)
    6: <i className='bi bi-circle-fill text-secondary'></i>, // Miss shot
    7: <i className='bi bi-circle-fill text-danger'></i>, // Hit
  };

  /**
   * Handle the click event and pass the index to the parent component.
   *
   * @param {type} index - the index of the board
   */
  function handleClick() {
    updateBoard(index);
  }

  return (
    <>
      <div
        className='col-1 border border-secondary text-center bg-info p-0'
        onClick={handleClick}
      >
        {cellContent[element] || element}
      </div>
    </>
  );
}

Cell.propTypes = {
  element: PropTypes.number.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number,
};
