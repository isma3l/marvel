import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { main } from './main.module.scss';

export const MainLayout = () => {
  return (
    <main className={main}>
      <Header />
      <Outlet />
    </main>
  );
};
