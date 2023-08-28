import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import ErrorPage from '../views/ErrorPage';
import { createMemoryRouter } from 'react-router-dom';

describe('Error Page', () => {
  afterEach(cleanup);
  it('Should render', () => {
    const { MemoryRouter } = createMemoryRouter();
    render(<ErrorPage />, { wrapper: MemoryRouter });
  });
});
