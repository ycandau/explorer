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

const setTrees = (state, payload) => {
  const { trees: serverTrees, errors } = payload;
  const trees = serverTrees.map((tree, treeInd) => ({
    ...tree,
    treeInd,
    status: 'LOADED',
  }));
  return { ...state, trees, errors };
};

//------------------------------------------------------------------------------

const toggleExpansion = (state, payload) => {
  const { treeInd, fileInd } = payload;

  const prevTree = state.trees[treeInd];
  const prevFiles = prevTree.files;
  const prevFile = prevFiles[fileInd];

  const file = { ...prevFile, isExpanded: !prevFile.isExpanded };
  const files = [...prevFiles];
  files[fileInd] = file;
  const tree = { ...prevTree, files };
  const trees = [...state.trees];
  trees[treeInd] = tree;

  return { ...state, trees };
};

//------------------------------------------------------------------------------

const deleteRoot = (state, payload) => {
  const treeInd = payload;
  const trees = state.trees.filter((tree) => tree.treeInd !== treeInd);
  return { ...state, trees };
};

//------------------------------------------------------------------------------

const setError = (state, payload) => {
  console.error(payload);
  const errors = [...state.errors, payload];
  return { ...state, errors };
};

//------------------------------------------------------------------------------
// Reducer

const fileExplorerReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_TREES':
      return setTrees(state, payload);

    case 'TOGGLE_EXPANSION':
      return toggleExpansion(state, payload);

    case 'DELETE_ROOT':
      return deleteRoot(state, payload);

    case 'ERROR':
      return setError(state, payload);

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

//------------------------------------------------------------------------------
// Hook

const useAppData = () => {
  const [state, dispatch] = useReducer(fileExplorerReducer, initState);
  return [state, dispatch];
};

//------------------------------------------------------------------------------

export default useAppData;
