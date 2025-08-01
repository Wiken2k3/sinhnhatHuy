'use client';

import React, { useState } from 'react';
import ConfettiBurst from '../../effects/ConfettiBurst';
import TypingText from '../../effects/TypingText';
import NextButton from '../../ui/NextButton';
import FullscreenWrapper from '../../ui/FullscreenWrapper';
// import BackgroundEffect from '../../effects/BackgroundEffect';
import giftBoxClosed from '../../../assets/images/gift-box-closed.png';
import giftBoxOpen from '../../../assets/images/gift-box-open.png';
import styles from './IntroScreen.module.css';

interface IntroScreenProps {
  onNext: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  const [boxOpened, setBoxOpened] = useState(false);

  const handleBoxClick = () => {
    if (!boxOpened) {
      setBoxOpened(true);
      setTimeout(() => {
        onNext();
      }, 2000);
    }
  };

  const introText = `À  nhon. Là tui đây,\nBấm vào hộp quà để mở quà nhé hihi \n`;

  return (
    <FullscreenWrapper>
      {/* <BackgroundEffect /> */}
      {boxOpened && <ConfettiBurst />}

      <div className={styles.container}>
        <div className={styles.typingTextBox}>
          <TypingText
            text={introText}
            speed={40}
            className={styles.typingTextContent}
          />
        </div>

        <div onClick={handleBoxClick} className={styles.giftBoxWrapper}>
          <img
            src={boxOpened ? giftBoxOpen : giftBoxClosed}
            alt="Hộp quà"
            className={`${styles.giftBox} ${boxOpened ? styles.opened : ''}`}
          />
        </div>

        {boxOpened && (
          <div className={styles.buttonWrapper}>
            <NextButton onClick={onNext} label="Mở hành trình 🎁" />
          </div>
        )}
      </div>
    </FullscreenWrapper>
  );
};

export default IntroScreen;
