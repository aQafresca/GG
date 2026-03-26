import { Link } from 'react-router-dom';

import { navMenuLinksConfig } from '@/shared/lib/config';

import styles from './index.module.scss';

interface INavMenuLink {
  className?: string;
  onClose?: () => void;
}

export const NavMenu = ({ className, onClose }: INavMenuLink) => {
  return (
    <nav className={styles.menu}>
      <ul className={className}>
        {Object.values(navMenuLinksConfig).map((link) => (
          <li className={styles.list} key={link.route}>
            <Link className={styles.link} to={link.route} onClick={onClose}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
