import clsx from 'clsx';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './index.module.scss';

type Size = 'lg' | 'md' | 'sm' | 'xs';
type Variant = 'accent' | 'outline' | 'ghost';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      type = 'button',
      size = 'medium',
      variant = 'outline',
      loading = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={clsx(
          styles.button,
          styles[size],
          styles[variant],
          {
            [styles.loading]: loading,
            [styles.fullWidth]: fullWidth,
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
