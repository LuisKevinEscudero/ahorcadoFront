import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws-endpoint');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/visitCount', (message) => {
        const newVisitCount = JSON.parse(message.body);
        setVisitCount(newVisitCount);
      });

      if (!visited) {
        stompClient.send('/app/incrementVisit', {}, '');
        setVisited(true);
      }

      return () => {
        stompClient.disconnect();
      };
    });
  }, [visited]);

  return (
    <div>
      <h1>Contador de Visitas en Tiempo Real</h1>
      <p>Visitas: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;
