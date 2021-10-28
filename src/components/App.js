//------------------------------------------------------------------------------
// Imports

import useAppData from '../hooks/useAppData';
import useInitialGet from '../hooks/useInitialGet';

import Header from './Header';
import FileExplorer from './FileExplorer';

import '../css/colors.css';
import '../css/App.css';

//------------------------------------------------------------------------------
// Component

const App = () => {
  const [state, dispatch] = useAppData();
  const { trees } = state;

  useInitialGet(dispatch);

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
