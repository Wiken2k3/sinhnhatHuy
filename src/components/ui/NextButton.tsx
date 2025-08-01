// components/ui/NextButton.tsx
import React from 'react';
import styles from './NextButton.module.css';

interface NextButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label = 'Tiếp tục', disabled }) => {
  return (
    <button className={styles.nextButton} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default NextButton;
