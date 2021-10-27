//------------------------------------------------------------------------------
// Imports

import { useReducer, useCallback } from 'react';

//------------------------------------------------------------------------------
// Initial state

const initState = {
  trees: [],
  errors: [],
};

//------------------------------------------------------------------------------
// Actions

const getTrees = (state, payload) => {
  const { trees, errors } = payload;
  return { ...state, trees, errors };
};

//------------------------------------------------------------------------------
// Reducer

const fileExplorerReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TREES':
      return getTrees(state, action.payload);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

//------------------------------------------------------------------------------
// Hook

const useFileExplorerData = () => {
  const [state, dispatch] = useReducer(fileExplorerReducer, initState);

  const setTrees = useCallback(
    (data) => dispatch({ type: 'GET_TREES', payload: data }),
    []
  );

  return { state, setTrees };
};

//------------------------------------------------------------------------------

export default useFileExplorerData;
