import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Loader, Header } from '@/components';

import styles from './index.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`container ${styles.main}`}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
