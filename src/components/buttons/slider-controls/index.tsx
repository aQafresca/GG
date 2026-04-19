import { Button } from '@/components/buttons/base';

import styles from './index.module.scss';

interface ICarouselControls {
  move: (step: number) => void;
}

export const SliderControls = ({ move }: ICarouselControls) => {
  return (
    <div className={styles.controls}>
      <Button className={styles.button} variant={'ghost'} onClick={() => move(-1)}>
        <img src="src/assets/images/svg/left_arrow.svg" alt="предыдущий слайд" />
      </Button>

      <Button className={styles.button} variant={'ghost'} onClick={() => move(1)}>
        <img src="src/assets/images/svg/right_arrow.svg" alt="следующий слайд" />
      </Button>
    </div>
  );
};
