import { cleanup } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { Link } from 'react-router-dom';
import { afterEach, describe, it } from 'vitest';

function ErrorPage() {
  return (
    <>
      <h1>Error</h1>
      <Link className='btn btn-primary' to='/setup' role='button'>
        Start
      </Link>
    </>
  );
}

describe('ErrorPage', () => {
  afterEach(cleanup);
  it('should render', () => {
    render(<ErrorPage />);
  });
  it('should render the title correctly', () => {
    render(<ErrorPage />);
    screen.getByText('Error');
  });
  it('should render a button', () => {
    render(<ErrorPage />);
    screen.getByRole('button');
  });
});
