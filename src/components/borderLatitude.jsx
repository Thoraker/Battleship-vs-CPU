import { borderLatitude } from '../assets/bordersArrays';

/**
 * Generates the JSX code for rendering the border latitude component (left and right columns with letters).
 */
export function BorderLatitude() {
  return (
    <div className='col-1 m-0'>
      {borderLatitude.map((latitude, index) => (
        <div key={index} className='border border-dark text-center p-0'>
          {latitude}
        </div>
      ))}
    </div>
  );
}
