//------------------------------------------------------------------------------
// Imports

import { useReducer } from 'react';

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

const toggleExpansion = (state, payload) => {
  const { treeInd, fileInd } = payload;

  const tree = state.trees[treeInd];
  const file = tree[fileInd];
  const newFile = { ...file, isExpanded: !file.isExpanded };
  const newTree = [...tree];
  newTree[fileInd] = newFile;
  const newTrees = [...state.trees];
  newTrees[treeInd] = newTree;

  return { ...state, trees: newTrees };
};

//------------------------------------------------------------------------------
// Reducer

const fileExplorerReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_TREES':
      return getTrees(state, payload);

    case 'TOGGLE_EXPANSION':
      return toggleExpansion(state, payload);

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

//------------------------------------------------------------------------------
// Hook

const useFileExplorerData = () => {
  const [state, dispatch] = useReducer(fileExplorerReducer, initState);
  return [state, dispatch];
};

//------------------------------------------------------------------------------

export default useFileExplorerData;
