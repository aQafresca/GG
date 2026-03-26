import styles from './index.module.scss';

export const DescriptionSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.animation}>dsfsdf</div>
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
