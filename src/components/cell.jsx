import PropTypes from 'prop-types';

export default function Cell({ element, updateBoard, index }) {
  const check = {
    0: <i className='bi bi-circle'></i>, // Empty cell (no shot yet)
    6: <i className='bi bi-circle-fill text-secondary'></i>, // Miss shot
    7: <i className='bi bi-circle-fill text-danger'></i>, // Hit
  };

  function handleClick() {
    updateBoard(index);
  }
  return (
    <>
      <div
        className='col-1 border border-secondary text-center bg-info'
        onClick={handleClick}
      >
        {check[element] || element}
      </div>
    </>
  );
}

Cell.propTypes = {
  element: PropTypes.number.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number,
};
