import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { NavMenu } from '@/components/leyouts/header/nav-menu';

import styles from './index.module.scss';

interface IProps {
  className?: string;
}

export const MobileMenu = ({ className }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');

    const handler = () => {
      if (mq.matches) setIsOpen(false);
    };

    mq.addEventListener('change', handler);

    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={`${className} ${styles.trigger}`}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>

      {createPortal(
        <>
          <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)} />
          <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
            <NavMenu className={styles.menu__mobile} onClose={handleCloseMenu} />
          </aside>
        </>,
        document.body,
      )}
    </>
  );
};
