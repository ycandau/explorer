//------------------------------------------------------------------------------
// Imports

import { useState, useEffect } from 'react';
import axios from 'axios';

import useFileExplorerData from '../hooks/useFileExploreData';

import Header from './Header';
import FileExplorer from './FileExplorer';

import '../css/colors.css';
import '../css/App.css';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

/*eslint no-unused-vars: 0*/

//------------------------------------------------------------------------------
// Component

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { state, setTrees } = useFileExplorerData();
  const { trees } = state;

  useEffect(() => {
    setLoading(true);
    axios
      .get('/trees')
      .then((res) => setTrees(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [setTrees]);

  const toggleExpand = (treeId) => (fileId) => () => {
    setTrees((trees) => {
      const tree = trees[treeId];
      const file = tree[fileId];
      const newFile = { ...file, isExpanded: !file.isExpanded };
      const newTree = [...tree];
      newTree[fileId] = newFile;
      const newTrees = [...trees];
      newTrees[treeId] = newTree;
      return newTrees;
    });
  };

  return (
    <main id="app">
      <Header />
      <FileExplorer trees={trees} toggleExpand={toggleExpand} />
      <section className="rest"></section>
    </main>
  );
};

//------------------------------------------------------------------------------

export default App;
