import { renderTitle } from '@/shared/helpers/text-decoration';

import styles from './index.module.scss';

interface IProps {
  title: string;
  slogan: string;
}

export const HeroSection = ({ title, slogan }: IProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <img src="src/assets/images/svg/dots.svg" width={70} height={40} alt="dots decoration" />
        <p className={styles.slogan}>{slogan}</p>
        <h1 className={styles.title}>{renderTitle(title)}</h1>
      </div>
    </section>
  );
};
