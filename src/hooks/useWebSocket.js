//------------------------------------------------------------------------------
// Imports

import { useEffect } from 'react';

//------------------------------------------------------------------------------
// Hook

const useWebSocket = (dispatch) => {
  useEffect(() => {
    const url = process.env.REACT_APP_WEBSOCKET_URL || 'ws://localhost:8000';
    const ws = new WebSocket(url);

    ws.onopen = () => ws.send('ping');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch({ type: 'SET_TREES', payload: data });
    };

    return () => ws.close();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

//------------------------------------------------------------------------------

export default useWebSocket;
