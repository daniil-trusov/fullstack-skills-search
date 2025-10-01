import { Header } from '@/components/Header';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { MAX_CONTENT_WIDTH } from './constants';

function App() {
  return (
    <div className="bg-blue-50 min-h-screen w-full flex flex-col">
      <Header />

      <main className={clsx('flex-1 px-6  mx-auto w-full', MAX_CONTENT_WIDTH)}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
