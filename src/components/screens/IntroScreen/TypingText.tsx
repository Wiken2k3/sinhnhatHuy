import React, { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text?: string; // có thể không truyền
  speed?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text = '', speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    index.current = 0;
    setDisplayedText('');
    const safeText = text || '';

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + safeText.charAt(index.current));
      index.current++;

      if (index.current >= safeText.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const formattedText = displayedText.split('\n').map((line, i) => (
    <p key={i} style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
      {line}
    </p>
  ));

  return <div className={className}>{formattedText}</div>;
};

export default TypingText;
