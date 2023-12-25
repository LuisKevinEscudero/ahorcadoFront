// ErrorCounter.jsx
import React from 'react';

const ErrorCounter = ({ count, totalErrors }) => {
  return (
    <div className="error-counter bg-red-200 p-2 rounded-md">
      <p className="text-sm text-red-800 font-bold">Fallos: {count}/{totalErrors}</p>
    </div>
  );
};

export default ErrorCounter;
