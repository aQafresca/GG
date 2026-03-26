import { useMemo, useRef, useState } from 'react';
import * as React from 'react';

import { Button } from '@/components/buttons/base';
import { ReviewCard } from '@/components/review-card';
import { useWindowWidth } from '@/shared/hooks/useWindowWidth.ts';
import { CAROUSEL_CONFIG } from '@/shared/lib/config';
import { reviewConfig } from '@/shared/lib/config';

import styles from './index.module.scss';

export const Carousel = () => {
  const [pointer, setPointer] = useState(0);

  const width = useWindowWidth();
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleOffsets = useMemo(() => {
    if (width <= 768) return [0];
    if (width < 1266) return [-1, 0, 1];

    return [-2, -1, 0, 1, 2];
  }, [width]);

  const getIndex = (i: number) => (i + reviewConfig.length) % reviewConfig.length;

  const move = (step: number) => {
    setPointer((prev) => getIndex(prev + step));
    containerRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      move(-1);
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      move(1);
    }
  };

  return (
    <div className={styles.wrapper} aria-atomic="true">
      <div className={styles.controls}>
        <Button className={styles.button} variant={'ghost'} onClick={() => move(-1)}>
          <img src="src/assets/images/svg/left_arrow.svg" alt="предыдущий отзыв" />
        </Button>

        <Button className={styles.button} variant={'ghost'} onClick={() => move(1)}>
          <img src="src/assets/images/svg/right_arrow.svg" alt="следующий отзыв" />
        </Button>
      </div>

      <div
        className={styles.view}
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Отзывы"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.track} aria-live="polite" aria-atomic="true">
          {visibleOffsets.map((offset) => {
            const dataIndex = getIndex(pointer + offset);
            const review = reviewConfig[dataIndex];

            const absDist = Math.abs(offset);

            const scale = Math.max(1 - absDist * CAROUSEL_CONFIG.scaleStep, 0.5);
            const opacity = Math.max(1 - absDist * CAROUSEL_CONFIG.opacityStep, CAROUSEL_CONFIG.scaleStep);
            const z = -absDist * CAROUSEL_CONFIG.depthStep;
            const x = offset * CAROUSEL_CONFIG.stepX;

            return (
              <div
                key={review.id}
                className={styles.card}
                aria-hidden={offset !== 0}
                style={{
                  transform: `translateX(${x}px) scale(${scale}) translateZ(${z}px)`,
                  opacity,
                }}
              >
                <ReviewCard src={review.src} alt={review.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
