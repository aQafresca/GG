import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Loader, Header } from '@/components';
import { ScrollToTop } from '@/components/scroll';

import styles from './index.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
