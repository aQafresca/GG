import { Button } from '@/components/buttons/base';

interface IErrorProps {
  className?: string;
}

export const PageError = ({ className }: IErrorProps) => {
  const reloadPage = () => location.reload();

  return (
    <div className={className}>
      <h1>Ошибка</h1>
      <Button variant={'outline'} size={'md'} onClick={reloadPage}>
        перезагрузить
      </Button>
    </div>
  );
};
