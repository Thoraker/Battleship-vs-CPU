import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

function GameBoard(prop) {
  if (prop === undefined) throw new Error('Parameter prop is required');
  if (Array.isArray(prop) === false)
    throw new Error('Parameter prop should be an array');
  if (prop.length === 0) throw new Error('Parameter prop should not be empty');
  if (prop.some((item) => typeof item !== 'number' || item !== null))
    throw new Error('Parameter prop should be an array of numbers');
  return (
    <>
      {prop.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

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
    render(<GameBoard prop={[1, 2, 3]} />, { wrapper: BrowserRouter });
    screen.getByText('1');
  });
});
