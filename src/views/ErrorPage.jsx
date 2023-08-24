import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h1>Error</h1>
      <p>Something went wrong...</p>
      <Link className='btn btn-primary' to='/' role='button'>
        Back to Home
      </Link>
    </>
  );
}
export default ErrorPage;
