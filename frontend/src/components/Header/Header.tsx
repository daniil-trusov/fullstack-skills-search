import { MAX_CONTENT_WIDTH } from '@/constants';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuButton, NavLinks } from './components';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 right-0 left-0 z-50 border border-gray-300 bg-white">
      <div
        className={clsx(
          'w-full flex justify-between items-center mx-auto py-4 px-6',
          MAX_CONTENT_WIDTH,
        )}
      >
        <Link to="/" className="hover:scale-105 transition-transform duration-300">
          <h1 className="italic uppercase text-xl font-bold text-blue-600">Search by skill</h1>
        </Link>

        <nav>
          <NavLinks
            aria-label="Main navigation"
            className="hidden flex-row justify-center gap-8 lg:flex"
          />

          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

          <div
            id="mobile-menu"
            className={clsx(
              'fixed top-16 left-0 right-0 z-10 bg-white p-6 shadow-lg transform transition-all duration-300 ease-out origin-top lg:hidden',
              isOpen
                ? 'pointer-events-auto scale-y-100 opacity-100'
                : 'pointer-events-none scale-y-0 opacity-0',
            )}
          >
            <NavLinks
              aria-label="Mobile navigation"
              className="flex-col gap-4 text-right"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
