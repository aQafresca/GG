import PhoneIcon from '@/assets/images/svg/phone_icon.svg?react';

import styles from './index.module.scss';

interface IProps {
  className?: string;
}

export const CallIcon = ({ className }: IProps) => {
  return (
    <a href="tel: +375291801438" title={'заказать звонок'} className={`${className} ${styles.link}`}>
      <PhoneIcon className={styles.phone} />
    </a>
  );
};
