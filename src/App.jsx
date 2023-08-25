import { useState } from 'react';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import getState from './data/flux';
import { useEffect } from 'react';

export const AppContext = createContext(null);

/**
 * App component, in which we set the global AppContext and render the children routes.
 *
 * @return {JSX.Element} The rendered child component depending on the route (Outlet).
 */
function App() {
  const [state, setState] = useState(
    getState({
      getStorage: () => state.storage,
      getActions: () => state.actions,
      setStorage: (updatedStorage) =>
        setState({
          storage: Object.assign(state.storage, updatedStorage),
          actions: { ...state.actions },
        }),
    })
  );

  useEffect(() => {
    state.actions.loadInitialData();
  }, []);

  return (
    <>
      <AppContext.Provider value={state}>
        <Outlet />
      </AppContext.Provider>
    </>
  );
}

export default App;
