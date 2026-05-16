import { Button } from '@/components/buttons/base';

import styles from './index.module.scss';

export const JoinUsSections = () => {
  return (
    <section className={`container ${styles.join}`}>
      <div className={styles.inner}>
        <div>
          <p className={styles.title}>Ready to have expiry</p>
          <p className={styles.subtitle}>The event of lifetime</p>
        </div>
        <p className={styles.description}>
          When it comes to event production in Miami, Florida, Event Factor delivers experiences that speak for
          themselves. Book your spot now and secure memories that will last forever!
        </p>
      </div>
      <div className={styles.inner}>
        <p>Давайте сделаем это</p>
        <Button size={'lg'} variant={'accent'}>
          8 (029) 180 14 38
        </Button>
      </div>
    </section>
  );
};
