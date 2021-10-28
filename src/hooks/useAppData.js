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
// Helpers

const nextFileIndex = (file, isExpanded, index) => {
  if (!file.isDir || isExpanded || file.nextNonChild === undefined) {
    return index + 1;
  }
  return file.nextNonChild;
};

const filterExpanded = (files, fileInd) => {
  const expandedDirs = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];
    const isExpanded = i === fileInd ? !file.isExpanded : file.isExpanded;

    if (isExpanded) {
      expandedDirs.push([file.id, file.path]);
    }
    i = nextFileIndex(file, isExpanded, i);
  }
  return expandedDirs;
};

const getUpdatedRoot = (state, treeInd, fileInd) => {
  const tree = state.trees[treeInd];
  const files = tree.files;
  const { name, path, id } = files[0];
  const expandedDirs = filterExpanded(files, fileInd);

  return { name, path, id, expandedDirs };
};

// Create a predicate to accept all indexes or only indexes passed in an array.
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

const toggleExpansion = async (state, payload) => {
  const { treeInd, fileInd } = payload;

  return state;
  // return axios
  //   .put('/api', getUpdatedRoot(state, treeInd, fileInd))
  //   .then((res) => setTrees(state, res.data))
  //   .catch(() => {});

  // const prevTree = state.trees[treeInd];
  // const prevFiles = prevTree.files;
  // const prevFile = prevFiles[fileInd];

  // const file = { ...prevFile, isExpanded: !prevFile.isExpanded };
  // const files = [...prevFiles];
  // files[fileInd] = file;
  // const tree = { ...prevTree, files };
  // const trees = [...state.trees];
  // trees[treeInd] = tree;

  // return { ...state, trees };
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
    case 'SET_TREES':
      return setTrees(state, payload);

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

const useAppData = () => {
  const [state, dispatch] = useReducer(fileExplorerReducer, initState);
  return [state, dispatch];
};

//------------------------------------------------------------------------------

export default useAppData;
