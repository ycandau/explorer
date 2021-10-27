import { useState, useEffect } from 'react';

import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const useInitialGet = (dispatch) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/trees')
      .then((res) => dispatch({ type: 'GET_TREES', payload: res.data }))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

const useAxios = { useInitialGet };

export default useAxios;
