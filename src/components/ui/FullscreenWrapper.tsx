import React from 'react';

const FullscreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  );
};

export default FullscreenWrapper;
