import { useNavigate } from 'react-router-dom';

import carImg from '@/assets/images/about_car.webp';
import { Button } from '@/components/buttons/base';
import { ROUTES } from '@/shared/constants/navigationMenu.ts';

import styles from './index.module.scss';

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className={`container ${styles.about}`}>
      <div className={styles.media}>
        <img className={styles.img} src={carImg} alt="Автомобиль" />
      </div>
      <div className={styles.description}>
        <div className={styles.inner}>
          <h4 className={styles.title}>Кто мы такие</h4>
          <h5 className={styles.subtitle}>Ваш надежный партнер в организации мероприятий</h5>
        </div>
        <p>
          Мы в Event Light Studio верим: свет — это пульс события. Можно собрать лучший декор и звук, но именно свет
          заставляет всё это работать. Мы подходим к освещению как к искусству и точной инженерии одновременно.
        </p>
        <p>
          Каждое торжество для нас — это чистый холст. Мы вооружены топовыми контроллерами и современными LED-системами,
          чтобы покорить любую локацию. Мы организовывали свет для сотен уникальных пар и зажигательных вечеринок, и
          каждый раз наш приоритет — «Zero-Flicker» качество и идеальная картинка для ваших фотографов. Мы берем на себя
          всю техническую сложность, оставляя вам только чистый восторг и атмосферу, которая останется с вами навсегда.
        </p>
        <div className={styles.buttons}>
          <Button size={'md'} variant={'outline'} onClick={() => navigate(ROUTES.ABOUT)}>
            больше о нас
          </Button>
          <Button size={'md'} variant={'accent'} onClick={() => navigate(ROUTES.PORTFOLIO)}>
            портфолио
          </Button>
        </div>
      </div>
    </section>
  );
};
