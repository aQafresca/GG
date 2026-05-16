import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants/navigationMenu.ts';

import styles from './index.module.scss';

interface IProps {
  className?: string;
}

export const Logo = ({ className }: IProps) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <Link to={ROUTES.HOME} className={styles.link}>
        ELS
      </Link>
    </div>
  );
};
