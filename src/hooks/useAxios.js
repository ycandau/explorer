import { useState, useEffect } from 'react';

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const useGet = (url) => {
  const [loading, setloading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setloading(false));
  }, [url]);

  return { loading, response, error };
};

export default useGet;
