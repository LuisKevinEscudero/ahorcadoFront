// ErrorCounter.jsx
import React from 'react';

const ErrorCounter = ({ count }) => {
  return (
    <div className="error-counter">
      <p>Fallos: {count}</p>
    </div>
  );
};

export default ErrorCounter;
