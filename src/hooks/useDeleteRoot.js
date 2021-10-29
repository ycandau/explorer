//------------------------------------------------------------------------------
// Imports

import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

//------------------------------------------------------------------------------
// Hook

const useDeleteRoot = (dispatch) => {
  const del = (rootId) => {
    // dispatch({ type: 'LOADING', payload: 'all' });
    axios
      .delete(`/api/${rootId}`)
      .then((res) => dispatch({ type: 'SET_TREES', payload: res.data }))
      .catch((err) => dispatch({ type: 'ERROR', payload: err }));
    // .finally(() => dispatch({ type: 'FINISHED' }));
  };
  return del;
};

//------------------------------------------------------------------------------

export default useDeleteRoot;
