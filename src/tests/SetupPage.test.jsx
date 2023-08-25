import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import SetupPage from '../views/Setup';

describe('SetupPage view', () => {
  afterEach(cleanup);
  it('should render', () => {
    render(<SetupPage />, { wrapper: BrowserRouter });
  });
  it('should render the title correctly', () => {
    render(<SetupPage />, { wrapper: BrowserRouter });
    screen.getByText('Setup Page');
  });
  it('should render the instructions correctly', () => {
    render(<SetupPage />, { wrapper: BrowserRouter });
    screen.getByText('Click to place your Boats on the Grid');
  });
  it('should render a board component', () => {
    render(<SetupPage />, { wrapper: BrowserRouter });
    screen.getByRole('button');
  });
  it('should render the board component', () => {});
  render(<SetupPage />, { wrapper: BrowserRouter });
  screen.getByRole('button');
});
