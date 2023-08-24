import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import ErrorPage from '../views/ErrorPage';

describe('HomePage view', () => {
  afterEach(cleanup);
  it('Should render', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
  });
  it('Should render the title correctly', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    screen.getByText('Error');
  });

  it('Should render a button', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    screen.getByRole('button');
  });
  it('Should render generic message', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    screen.getByText('Something went wrong...');
  });
  it("Should render a button with the text 'Play'", () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
    screen.getByRole('button', { name: 'Back to Home' });
  });
});
