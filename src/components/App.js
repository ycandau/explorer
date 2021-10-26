//------------------------------------------------------------------------------
// Imports

import { useState, useEffect } from 'react';

import '../css/colors.css';
import '../css/App.css';

//------------------------------------------------------------------------------
// Default export

const App = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <main id="app">
      <section className="header">Header</section>
      <section className="file-explorer">Text</section>
      <section className="rest">Rest of the App</section>
    </main>
  );
};

//------------------------------------------------------------------------------

export default App;
