import styles from './index.module.scss';

interface IProps {
  src: string;
  alt: string;
}

export const ReviewCard = ({ src, alt }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={alt} width={300} height={400} />
    </div>
  );
};
