import PropTypes from 'prop-types';
import { borderLongitude } from '../assets/bordersArrays';

/**
 * Generates the JSX code for rendering the border longitude component (up and bottom rows with numbers).
 *
 * @return {JSX.Element} The rendered border longitude component.
 */
export function BorderLongitude({ children }) {
  return (
    <div className='row'>
      {borderLongitude.map((_, index) => (
        <div key={index} className='col-1 border border-dark text-center p-0'>
          {index + 1}
        </div>
      ))}
      {children}
      {borderLongitude.map((_, index) => (
        <div key={index} className='col-1 border border-dark text-center p-0'>
          {index + 1}
        </div>
      ))}
    </div>
  );
}

BorderLongitude.propTypes = {
  children: PropTypes.node,
};
