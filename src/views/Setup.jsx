import { Link } from 'react-router-dom';

function SetupPage() {
  return (
    <>
      <h1>Setup Page</h1>
      <p>Place your Boats on the Grid</p>
      <Link className='btn btn-primary' to='/setup' role='button'>
        Start
      </Link>
    </>
  );
}
export default SetupPage;
