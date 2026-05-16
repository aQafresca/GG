import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';

import LeftArrow from '@/assets/images/svg/left_arrow.svg?react';
import RightArrow from '@/assets/images/svg/right_arrow.svg?react';
import { Button } from '@/components/buttons/base';
import { SLIDES } from '@/shared/lib/config';

import styles from './index.module.scss';

const ANIMATION_DURATION = 0.6;
const AUTO_SLIDE_INTERVAL = 100000;
const DRAG_THRESHOLD = 100;
const SLIDE_OFFSET = 300;

export const Services = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback((dir: number) => {
    setIndex(([prev]) => {
      const nextIndex = (prev + dir + SLIDES.length) % SLIDES.length;

      return [nextIndex, dir];
    });
  }, []);

  const startTimer = useCallback(() => {
    timerRef.current = setTimeout(() => paginate(1), AUTO_SLIDE_INTERVAL);
  }, [paginate]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [startTimer]);

  useEffect(() => {
    resetTimer();
  }, [index, resetTimer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? SLIDE_OFFSET : -SLIDE_OFFSET,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -SLIDE_OFFSET : SLIDE_OFFSET,
      opacity: 0,
    }),
  };

  const currentSlide = SLIDES[index];

  return (
    <section
      className={`container ${styles.services}`}
      role="region"
      aria-label="Services carousel"
      aria-roledescription="carousel"
    >
      <div className={styles.inner}>
        <h4 className={styles.title}>Что мы делаем лучше всего</h4>
        <h5 className={styles.subtitle}>Наши услуги по организации мероприятий</h5>
      </div>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide.id}
          className={styles.slide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: ANIMATION_DURATION }}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -DRAG_THRESHOLD) paginate(1);
            else if (info.offset.x > DRAG_THRESHOLD) paginate(-1);
          }}
          aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${currentSlide.title}`}
        >
          <div className={styles.details}>
            <h3 className={styles.title}>{currentSlide.title}</h3>
            <p className={styles.description}>{currentSlide.text}</p>
            <Button variant={'outline'} size={'md'}>
              узнать больше
            </Button>
          </div>

          <div className={styles.illustration}>
            <img className={styles.img} src={currentSlide.img} alt={currentSlide.title} />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <Button className={styles.button} variant={'ghost'} onClick={() => paginate(-1)}>
          <LeftArrow />
        </Button>
        <div className={styles.pagination} role="tablist" aria-label="Slide navigation">
          {SLIDES.map((slide, id) => (
            <div
              key={slide.id}
              className={id === index ? styles.active : ''}
              onClick={() => setIndex([id, id > index ? 1 : -1])}
              role="tab"
              aria-selected={id === index}
              aria-label={`Go to slide ${id + 1}`}
              tabIndex={id === index ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIndex([id, id > index ? 1 : -1]);
                }
              }}
            >
              {id + 1}
            </div>
          ))}
        </div>
        <Button className={styles.button} variant={'ghost'} onClick={() => paginate(1)}>
          <RightArrow />
        </Button>
      </div>
    </section>
  );
};
