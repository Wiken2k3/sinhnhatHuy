import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalScreen.module.css';
import finalgift from '../../assets/images/final-gift.png';

const FinalScreen: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        // Thêm hover effect nhẹ khi dùng framer-motion
        whileHover={{ scale: 1.02 }}
      >
        <h1 className={styles.title}>🎉HAPPY BIRTHDAY🎉</h1>

        <p className={styles.message}>
          Cuối cùng, Chúc ông tuổi mới thật bùng lổ - Tui hong biết nói gì hết nữa, chỉ muốn gửi ông những lời chúc tốt đẹp nhất hoi. Dị nha!
        </p>

        <motion.img
          src={finalgift}
          alt="Final Gift"
          className={styles.image}
          initial={{ opacity: 0, y: 40, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        <p className={styles.thank}>Cảm ơn bạn đã khám phá tất cả các món quà! HẸN GẶP LẠI NHEN 💛</p>
      </motion.div>
    </div>
  );
};

export default FinalScreen;
