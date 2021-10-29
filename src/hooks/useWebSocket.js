import { useEffect } from 'react';

const useWebSocket = (dispatch) => {
  useEffect(() => {
    const url = process.env.REACT_APP_WEBSOCKET_URL || 'ws://localhost:8000';
    const ws = new WebSocket(url);

    ws.onopen = () => ws.send('ping');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      // if (message.type === SET_INTERVIEW) {
      //   dispatch(message);
      // }
    };

    // Close on cleanup
    return () => ws.close();
  }, []);
};

export default useWebSocket;
