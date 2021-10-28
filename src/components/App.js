//------------------------------------------------------------------------------
// Imports

import useFileExplorerData from '../hooks/useFileExploreData';
import useAxios from '../hooks/useAxios';

import Header from './Header';
import FileExplorer from './FileExplorer';

import '../css/colors.css';
import '../css/App.css';

//------------------------------------------------------------------------------
// Component

const App = () => {
  const [state, dispatch] = useFileExplorerData();
  const { trees } = state;

  useAxios.useInitialGet(dispatch);

  return (
    <main id="app">
      <Header />
      <FileExplorer trees={trees} dispatch={dispatch} />
      <section className="rest"></section>
    </main>
  );
};

//------------------------------------------------------------------------------

export default App;
