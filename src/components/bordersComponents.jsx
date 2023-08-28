import PropTypes from 'prop-types';
import { borderLatitude, borderLongitude } from '../assets/bordersArrays';

/**
 * Generates the JSX code for rendering the border latitude component (left and right columns with letters coordinates).
 *
 * @return {JSX.Element} The rendered border latitude component.
 */
export function BorderLatitude() {
  return (
    <div className='col-1'>
      {borderLatitude.map((latitude, index) => (
        <div key={index} className='border border-dark text-center me-0'>
          {latitude}
        </div>
      ))}
    </div>
  );
}

export function BorderLongitude({ children }) {
  return (
    <div className='row'>
      {borderLongitude.map((longitude, index) => (
        <div key={index} className='col-1 border border-dark text-center'>
          {index + 1}
        </div>
      ))}
      {children}
      {borderLongitude.map((longitude, index) => (
        <div key={index} className='col-1 border border-dark text-center'>
          {index + 1}
        </div>
      ))}
    </div>
  );
}

BorderLongitude.propTypes = {
  children: PropTypes.node,
};
