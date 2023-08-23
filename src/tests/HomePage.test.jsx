import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import HomePage from '../views/HomePage';

describe('HomePage', () => {
  afterEach(cleanup);
  it('Should render', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
  });
  it('Should render the title correctly', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    screen.getByText('Battleship Home Page');
  });
  it('Should render a button', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    screen.getByRole('button');
  });
  it("Should render a button with the text 'Play'", () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    screen.getByRole('button', { name: 'Start' });
  });
  it('Should show the rules of the game', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    screen.getByText('Rules');
    screen.getByRole('rules');
  });
});
