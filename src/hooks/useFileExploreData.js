//------------------------------------------------------------------------------
// Imports

import axios from 'axios';
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
  const { trees: serverTrees, errors } = payload;
  const trees = serverTrees.map((tree, treeInd) => ({
    ...tree,
    treeInd,
    status: 'LOADED',
  }));
  return { ...state, trees, errors };
};

const nextIndex = (file, fileInd, index) => {
  const isExpanded = index === fileInd ? !file.isExpanded : file.isExpanded;

  if (!file.isDir || isExpanded || file.nextNonChild === undefined) {
    return index + 1;
  }
  return file.nextNonChild;
};

const filterExpanded = (files) => {
  const expandedDirs = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];
    if (file.isExpanded) {
      expandedDirs.push(file);
    }
    i = nextIndex(file, i);
  }
  return expandedDirs;
};

const updatedRoot = (state, treeInd, fileInd) => {
  const tree = state.trees[treeInd];
  const files = tree.files;
  const { name, path, id } = files[0];
  const expandedDirs = filterExpanded(files, fileInd);

  return { name, path, id, expandedDirs };
};

const toggleExpansion = (state, payload) => {
  const { treeInd, fileInd } = payload;
  axios
    .put('/api', updatedRoot(state, treeInd, fileInd))
    .then((res) => console.log(res.data))
    .catch(() => {});

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
// Predicate to accept all indexes or only the indexes passed in an array.

const allOrSome = (payload) => {
  // True for all
  if (payload === 'all') {
    return (_) => true;
  }
  // Or only when the index is included in a set
  const set = new Set(payload);
  return (treeInd) => set.has(treeInd);
};

//------------------------------------------------------------------------------

const setStatus = (state, payload, status) => {
  const changeThisTree = allOrSome(payload);

  const trees = state.trees.map((prevTree) => {
    const tree = changeThisTree(prevTree.treeInd)
      ? { ...prevTree, status }
      : prevTree;
    return tree;
  });

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
    case 'GET_TREES':
      return getTrees(state, payload);

    case 'TOGGLE_EXPANSION':
      return toggleExpansion(state, payload);

    case 'LOADING':
    case 'FINISHED':
      return setStatus(state, payload, type);

    case 'ERROR':
      return setError(state, payload);

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
