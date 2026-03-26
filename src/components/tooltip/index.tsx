import { socialDataCfg } from '@/shared/lib/config';

import styles from './index.module.scss';

const Tooltip = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {socialDataCfg.map((social) => (
          <li className={styles.content} key={social.id}>
            <a
              className={styles.link}
              href={social.url}
              aria-label={social.name}
              data-social={social.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.filled}></div>
              <svg
                className={styles.svg}
                viewBox={social.viewBox || '0 0 16 16'}
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d={social.path} />
              </svg>
            </a>
            <div className={styles.text}>{social.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tooltip;
