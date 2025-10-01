import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Chip: React.FC<Props> = ({ children, className, onClick, ...rest }) => {
  const baseStyle = 'bg-blue-200 text-sm text-blue-600 py-1 px-2 rounded-lg cursor-pointer';
  const interactiveStyle =
    'hover:scale-105 transition-transform duration-300 ease-out hover:text-white focus:ring-2';

  return (
    <div
      className={clsx(baseStyle, onClick && interactiveStyle, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};
