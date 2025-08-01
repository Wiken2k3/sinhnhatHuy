'use client';

import React, { useState } from 'react';
import styles from './WishScreen.module.css';
import ConfettiBurst from '../../../components/effects/ConfettiBurst';

interface WishScreenProps {
  onNext?: () => void;
}

const messages = [
  'Chúc ông tuổi mới lúc nào cũng dui dẻ, tích cực trong cuộc sống',
  'Qua tuổi mới thì sẽ hoàn thành hết ở trường; kiếm được công việc yêu thích phù hợp với mình và ...',
  'Như lời hứa, Hẹn gặp bro ở Lễ Tốt Nghiệp năm sau nhé🌟',
  'Nói chung là chúc ông tất cả hehehe 🚀',
  'Tiếp tục là đến chuyên mục lộ hint một chút về món quà sinh nhật nhe ^^',
  'Bắt đầu nhaa',
];

const WishScreen: React.FC<WishScreenProps> = ({ onNext }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  const handleNext = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setShowConfetti(false);
      if (onNext) onNext();
    }
  };

  return (
    <div className={styles.wrapper}>
      {showConfetti && <ConfettiBurst />}
      <div className={styles.card}>
        <h1 className={styles.title}> Lời chúc nho nhỏ dành cho cậu 🎉 </h1>
        <p key={messageIndex} className={styles.message}>
          {messages[messageIndex]}
        </p>

        {/* Bánh kem hoạt hình */}
        <div className={styles.cakeContainer}>
          <div className={styles.cake}>
            <div className={styles.candle}></div>
            <div className={styles.cakeLayer}></div>
            <div className={styles.cakeLayer}></div>
            <div className={styles.cakeBase}></div>
          </div>
        </div>

        <button className={styles.nextButton} onClick={handleNext}>
          {messageIndex < messages.length - 1 ? 'Tiếp theo 🎈'  : '🎁 Tiếp tục'}
        </button>
      </div>
    </div>
  );
};

export default WishScreen;
