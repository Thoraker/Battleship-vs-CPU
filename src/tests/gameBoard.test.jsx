import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import GameBoard from '../components/gameBoard';

describe('Game board react component', () => {
  it('Should be a function', () => {
    expect(GameBoard).toBeTypeOf('function');
  });
  it('Should throw if does not recibe a prop as a parameter', () => {
    expect(() => GameBoard()).toThrow();
  });
  it('Should throw if recibe a prop that is not an array', () => {
    expect(() => GameBoard('a')).toThrow();
    expect(() => GameBoard(1)).toThrow();
    expect(() => GameBoard({})).toThrow();
  });
  it('Should throw if recibe a prop that is not an empty array', () => {
    expect(() => GameBoard([])).toThrow();
  });
  it('Should throw if recibe a prop that is not an array of numbers o null', () => {
    expect(() => GameBoard(['a', 'b'])).toThrow();
  });
  it('Should render the board', () => {
    render(<GameBoard props={[1, 2, 3]} />, {
      wrapper: BrowserRouter,
    });
    screen.getByText('1');
  });
});
