// components/screens/RevealScreen.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './RevealScreen.module.css';

import neymar from '../../assets/gifts/neymar.png';
import porsche from '../../assets/gifts/porsche-pink.png';
import williams from '../../assets/gifts/williams-f1.png';

interface RevealScreenProps {
  onNext: () => void;
}

const gifts = [
  {
    title: '🎁 Món quà đầu tiên: "Hoàng tử Selecao"',
    image: neymar,
    description: 'Chính là Neymar Jr! Không phải Messi, nhưng từng tung hoành cùng anh ấy tại Barcelona.',
  },
  {
    title: '🏎️ Món quà thứ hai: "Chiếc xe mơ ước"',
    image: porsche,
    description: 'Porsche hồng – sang, xịn, mịn! Biểu tượng của tốc độ và phong cách.',
  },
  {
    title: '🏁 Món quà cuối cùng: "Đội đua màu xanh"',
    image: williams,
    description: 'Williams Racing – đội đua F1 huyền thoại với màu xanh dương đặc trưng. Ready to race?',
  },
];

const RevealScreen: React.FC<RevealScreenProps> = ({ onNext }) => {
  const [giftIndex, setGiftIndex] = useState(0);

  const handleNextGift = () => {
    if (giftIndex < gifts.length - 1) {
      setGiftIndex((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  const currentGift = gifts[giftIndex];

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.card}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {currentGift.title}
        </motion.h2>

        <motion.img
          src={currentGift.image}
          alt={currentGift.title}
          className={styles.image}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {currentGift.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={handleNextGift}>
            {giftIndex < gifts.length - 1 ? ' Món tiếp theo 🎁' : '✨ Tiếp theo'}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RevealScreen;
