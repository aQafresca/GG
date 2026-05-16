import { Button } from '@/components/buttons/base';
import Tooltip from '@/components/tooltip';

import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>
          <span>к</span>o<span>н</span>ta<span>к</span>t<span>ы</span>
        </h2>
        <div className={styles.social}>
          <div className={styles.box}>
            <img src="src/assets/images/svg/dots.svg" alt="dots svg" width={100} />
            <Button variant={'accent'} size={'md'}>
              позвонить
            </Button>
          </div>
          <div className={styles.box}>
            <span>Мы в социальных сетях</span>
            <Tooltip />
          </div>
        </div>
      </div>
    </footer>
  );
};
