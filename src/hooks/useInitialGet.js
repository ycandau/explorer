import { useEffect } from 'react';

import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const useInitialGet = async (dispatch) => {
  useEffect(() => {
    dispatch({ type: 'LOADING', payload: 'all' });
    axios
      .get('/api')
      .then((res) => dispatch({ type: 'SET_TREES', payload: res.data }))
      .catch((err) => dispatch({ type: 'ERROR', payload: err })); // @todo
    // .finally(() => dispatch({ type: 'FINISHED' }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useInitialGet;
