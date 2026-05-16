import { useState } from 'react';

import { Button } from '@/components/buttons/base';
import { ReviewCard } from '@/components/review-card';
import { reviewConfig } from '@/shared/lib/config';

import styles from './index.module.scss';

export const ReviewSection = () => {
  const step = 4;

  const [visibleCount, setVisibleCount] = useState(step);

  const handleClick = () => {
    setVisibleCount((prev) => prev + step);
  };

  const isAllShow = visibleCount >= reviewConfig.length;

  return (
    <section className={`container ${styles.review}`}>
      <div>
        <div className={styles.inner}>
          <h4 className={styles.title}>Типа отзывы</h4>
          <h5 className={styles.subtitle}>Посмотрите что говорят о нас наши клиенты</h5>
        </div>
        <div className={styles.box}>
          {reviewConfig.slice(0, visibleCount).map((review) => (
            <ReviewCard key={review.id} src={review.src} alt={review.alt} />
          ))}
        </div>
        {!isAllShow && (
          <Button size={'md'} variant={'outline'} onClick={handleClick}>
            еще
          </Button>
        )}
      </div>
    </section>
  );
};
