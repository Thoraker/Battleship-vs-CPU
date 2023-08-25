import PropTypes from 'prop-types';

export default function Cell({ children, updateBoard, index }) {
  const check = {
    hit: <i className='bi bi-circle-fill text-danger'></i>,
    miss: <i className='bi bi-circle-fill text-secondary'></i>,
    empty: <i className='bi bi-circle'></i>,
    boat: <i className='bi bi-circle-fill text-dark'></i>,
  };

  function handleClick(index) {
    updateBoard(index);
  }
  return (
    <>
      <div
        className='col-1 border border-secondary text-center'
        onClick={handleClick(index)}
      >
        {children === null
          ? check.empty
          : children === 0
          ? check.miss
          : children === 6
          ? check.hit
          : check.boat}
      </div>
    </>
  );
}

Cell.propTypes = {
  children: PropTypes.any,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number,
};
