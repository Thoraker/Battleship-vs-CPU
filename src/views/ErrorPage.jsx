import { useEffect } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

/**
 * Renders the Error Page and the error message, after 3 seconds the user is redirected to the Home Page.
 */
export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <>
      <h1>Error</h1>
      <p>Something went wrong...</p>
      <p>{error.statusText || error.message}</p>
      <Link className='btn btn-primary' to='/' role='button'>
        Back to Home
      </Link>
    </>
  );
}
