import { Carousel } from '@/components/carousel';

import styles from './index.module.scss';

export const ReviewSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Посмотрите, что говорят о нас наши клиенты</h2>
      <Carousel />
    </section>
  );
};
