import { type ReactNode, useId } from 'react';

import styles from './index.module.scss';

interface IProps {
  title: ReactNode;
  children: ReactNode;
  open: boolean;
  onToggle?: () => void;
}

export const Accordion = ({ title, children, open, onToggle }: IProps) => {
  const id = useId();
  const buttonId = `${id}-btn`;

  return (
    <div className={`${styles.wrapper} ${open ? styles.active : ''}`}>
      <button
        id={buttonId}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{open ? '—' : '+'}</span>
      </button>

      <div id={id} className={styles.content} role="region" aria-labelledby={buttonId}>
        <div className={styles.inner}>
          <p className={styles.answer}>{children}</p>
        </div>
      </div>
    </div>
  );
};
