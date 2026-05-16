import { useEffect, useState } from 'react';

import { Button } from '@/components/buttons/base';

import styles from './index.module.scss';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const height = 600;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > height);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <Button size={'sm'} variant={'outline'} onClick={scrollTop} className={styles.scroll}>
      T
    </Button>
  );
};
