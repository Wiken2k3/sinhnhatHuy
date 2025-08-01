import React from 'react';

const MemoryScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="screen">
      <h1>Chào mừng bạn đến với món quà!</h1>
      <button onClick={onNext}>Bắt đầu</button>
    </div>
  );
};

export default MemoryScreen;
