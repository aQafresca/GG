import { Link } from 'react-router-dom';

import { CallIcon } from '@/components/buttons/call';
import Tooltip from '@/components/tooltip';

import styles from './index.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.social}>
          <div className={styles.box}>
            <img src="src/assets/images/svg/dots.svg" alt="dots svg" width={100} />
            <div className={styles.box}>
              <span>Мы на связи</span>
              <CallIcon />
            </div>
          </div>
          <div className={styles.box}>
            <span>Мы в социальных сетях</span>
            <Tooltip />
          </div>
          <ul className={styles.list}>
            Время работы:
            <li className={styles.item}>
              <p>Пн-Чт:</p>
              <span>08:00-08:00</span>
            </li>
            <li className={styles.item}>
              <p>Пт-Сб:</p>
              <span>08:00-22:00</span>
            </li>
            <li className={styles.item}>
              <p>Вс</p>
              <span>11:00-20:00</span>
            </li>
          </ul>
        </div>
        <ul className={styles.copyright}>
          <li> &copy; {currentYear} |</li>
          <li>все права защищены |</li>
          <li>
            <Link to={'/'}>политика конфедициальности |</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
