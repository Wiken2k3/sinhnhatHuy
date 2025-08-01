import React from 'react';
import Button from '../../ui/Button';
import styles from './HintScreen.module.css';

interface HintScreenProps {
  onNext: () => void;
}

const HintScreen: React.FC<HintScreenProps> = ({ onNext }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>
        <h2 className={styles.title}>Gợi ý cho 3 món quà 🎁</h2>

        <div className={styles.hintGroup}>
          <div className={styles.hintBox}>
            <h2 className={styles.subtitle}>🎁 Món quà nhỏ số 1:</h2>
            <ul>
              <li>🔍 Anh ấy là số 10, nhưng lại chẳng phải là Messi.</li>
              <li>🔍 Từng là "hoàng tử của Selecao", mái tóc và gương mặt gây thương nhớ. </li>
              <li>🔍 Được coi là nghệ sĩ Samba cuối cùng trên sân cỏ</li>
              <li>🔍 Đá cặp cùng Messi và Suarez nhưng không đến từ Argentina hay Uruguay.</li>
            </ul>
          </div>

          <div className={styles.hintBox}>
            <h3 className={styles.subtitle}>🏎️ Món quà số 2:</h3>
            <ul>
              {/* <li>🚗 Tốc độ là bản năng, phong cách là bản sắc.</li> */}
              <li>🚗 Xe Đức – không phải BMW đâu nhé 😏. Thường được gọi là những chú ếch.</li>
              <li>🚗 Nếu mà thắng mày thắng 1 chiếc Civic. Còn nếu màu thua mày thua 1 chiếc Civic</li>
              <li>🚗 Thiết kế khí động học, đuôi “cá mập”.</li>
              <li>🚗 Màu hồng, hot hit vào 2 tháng trở lại đây.</li>
            </ul>
          </div>

          <div className={styles.hintBox}>
            <h3 className={styles.subtitle}>🏁 Món quà số 3:</h3>
            <ul>
              <li>🏎️ F1 – đỉnh cao tốc độ.</li>
              <li>🏎️ Không phải Red Bull hay Ferrari – mà là xanh dương mạnh mẽ.</li>
              <li>🏎️ Đội đua tên bắt đầu bằng “W”, từng vô địch thế giới.</li>
              <li>🏎️ Nếu xem F1 2023–2024, chắc bạn đã thấy nó lướt qua.</li>
            </ul>
          </div>
        </div>

        <Button onClick={onNext}>Mở quà thoai 🎉</Button>
      </div>
    </div>
  );
};

export default HintScreen;
