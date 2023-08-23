import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

function ErrorPage() {
  return (
    <>
      <h1>Error</h1>
      <button role='button'>Back to Home</button>
    </>
  );
}

describe('HomePage', () => {
  afterEach(cleanup);
  it('Should render', () => {
    render(<ErrorPage />);
  });
  it('Should render the title correctly', () => {
    render(<ErrorPage />);
    screen.getByText('Error');
  });

  it('Should render a button', () => {
    render(<ErrorPage />);
    screen.getByRole('button');
  });
  it("Should render a button with the text 'Play'", () => {
    render(<ErrorPage />);
    screen.getByRole('button', { name: 'Back to Home' });
  });
  it('Should show some error message', () => {
    render(<ErrorPage />);
    screen.getByText('Rules');
    screen.getByRole('rules');
  });
});
