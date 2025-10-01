import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  children: React.ReactNode;
  variant?: 'regular' | 'cta';
  className?: string;
}

export const LinkButton: React.FC<Props> = ({ children, variant, className, ...rest }) => {
  const variantClass =
    variant === 'cta'
      ? 'text-3xl py-3 px-6 bg-blue-600 hover:bg-blue-500'
      : 'text-base h-8 py-2 px-4 bg-blue-500 hover:bg-blue-400';

  return (
    <Link
      className={clsx(
        'inline-block rounded-xl text-white text-center hover:scale-105 transition-all duration-300 ease-out',
        variantClass,
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
