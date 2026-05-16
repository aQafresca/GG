import { CallIcon } from '@/components/buttons/call';
import { Logo } from '@/components/leyouts/header/logo';
import { MobileMenu } from '@/components/leyouts/header/mobile-menu';

import styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo className={styles.logo} />
        <CallIcon className={styles.call} />
        <MobileMenu className={styles.menu} />
      </div>
    </header>
  );
};
