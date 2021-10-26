//------------------------------------------------------------------------------
// Imports

import Header from './Header';

import '../css/colors.css';
import '../css/App.css';

//------------------------------------------------------------------------------
// Default export

const App = () => {
  return (
    <main id="app">
      <Header />
      <section className="file-explorer">File explorer</section>
      <section className="rest">Rest of the App</section>
    </main>
  );
};

//------------------------------------------------------------------------------

export default App;
