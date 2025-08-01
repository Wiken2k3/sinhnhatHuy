import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 40, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className={className}>{displayedText}</h1>;
};

export default TypingText;
