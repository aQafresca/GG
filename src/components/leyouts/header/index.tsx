import { Button } from '@/components/buttons/base';
import { Logo } from '@/components/leyouts/header/logo';
import { MobileMenu } from '@/components/leyouts/header/mobile-menu';
import { NavMenu } from '@/components/leyouts/header/nav-menu';

import styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.box}>
          <Logo />
        </div>
        <NavMenu className={styles.menu__desktop} />
        <div className={styles.box}>
          <Button variant={'accent'} size={'sm'} className={styles.btn}>
            позвонить
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
