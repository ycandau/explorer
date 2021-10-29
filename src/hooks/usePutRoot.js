//------------------------------------------------------------------------------
// Imports

import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

//------------------------------------------------------------------------------
// Hook

const usePutRoot = (dispatch) => {
  const put = (root) => {
    axios
      .put('/api', root)
      .then((res) => dispatch({ type: 'SET_TREES', payload: res.data }))
      .catch((err) => dispatch({ type: 'ERROR', payload: err }));
  };
  return put;
};

//------------------------------------------------------------------------------

export default usePutRoot;
