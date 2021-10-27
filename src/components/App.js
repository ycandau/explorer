//------------------------------------------------------------------------------
// Imports

import { useState, useEffect } from 'react';
import Header from './Header';

import axios from 'axios';

import '../css/colors.css';
import '../css/App.css';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

/*eslint no-unused-vars: 0*/

//------------------------------------------------------------------------------
// Default export

const App = () => {
  const [loading, setLoading] = useState(false);
  const [trees, setTrees] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/trees')
      .then((res) => {
        setTrees(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

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
