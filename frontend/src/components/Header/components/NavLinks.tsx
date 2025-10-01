import { NAV_LINKS } from '@/constants';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

type Props = {
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
};

export const NavLinks: React.FC<Props> = ({ ariaLabel, className, onClick }) => {
  return (
    <ul aria-label={ariaLabel} className={clsx('flex', className)}>
      {NAV_LINKS.map(({ label, path }) => (
        <li key={label}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              clsx(
                'inline-block uppercase text-lg decoration-none transition-all duration-300 ease-out',
                {
                  'font-bold text-blue-600 ': isActive,
                  'hover:font-bold hover:scale-105': !isActive,
                },
              )
            }
            onClick={onClick}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
