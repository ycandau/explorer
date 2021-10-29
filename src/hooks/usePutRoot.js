import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const usePutRoot = (dispatch) => {
  const put = (root) => {
    // dispatch({ type: 'LOADING', payload: 'all' });
    axios
      .put('/api', root)
      .then((res) => dispatch({ type: 'SET_TREES', payload: res.data }))
      .catch((err) => dispatch({ type: 'ERROR', payload: err }));
    // .finally(() => dispatch({ type: 'FINISHED' }));
  };
  return put;
};

export default usePutRoot;
