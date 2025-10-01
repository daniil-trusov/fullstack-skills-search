import clsx from 'clsx';
import { FaBars, FaTimes } from 'react-icons/fa';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuButton: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="hover:text-white active:text-white lg:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative h-6 w-6">
        <FaBars
          className={clsx('absolute h-full w-full transition-all duration-500 transform', {
            'rotate-180 opacity-0': isOpen,
            'rotate-0 opacity-100': !isOpen,
          })}
        />
        <FaTimes
          className={clsx('absolute h-full w-full transition-all duration-500 transform', {
            'rotate-0 opacity-100': isOpen,
            'rotate-180 opacity-0': !isOpen,
          })}
        />
      </div>
    </button>
  );
};
