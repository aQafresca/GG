import styles from './index.module.scss';

export const IntroSection = () => {
  return (
    <section className={`container ${styles.intro}`}>
      <div className={styles.animation}>
        <div className={styles.barcode}>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.uppercase}>
          Декор светом - это не роскошь, а база. Аплайт «красит» стены в ваши цвета и создает уют, а движущиеся головы
          превращают танцпол в шоу. Мы делаем так, чтобы гостям хотелось достать телефоны, как только они вошли в зал.
        </p>
        <p className={styles.lowercase}>
          Без света даже самый дорогой декор выглядит плоским. Мы выключаем скучный «бытовой» свет ресторана и
          превращаем вашу площадку в стильное мультимедийное пространство.
        </p>
      </div>
    </section>
  );
};
