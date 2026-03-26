import styles from './index.module.scss';

export const renderTitle = (text: string) => {
  const parts = text.split(/\[(.*?)]/g);

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span className={styles.text} key={i}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};
