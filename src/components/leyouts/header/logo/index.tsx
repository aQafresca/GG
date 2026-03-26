import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants/navigationMenu.ts';

import styles from './index.module.scss';

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.HOME}>LOGO</Link>
    </div>
  );
};
