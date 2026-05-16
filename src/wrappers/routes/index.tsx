import type { RouteObject } from 'react-router-dom';

import Layout from '@/wrappers/layout';
import { RouterManager } from '@/wrappers/routes/manager.ts';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: RouterManager.path('home'),
        lazy: () => import('@/pages/home').then((module) => ({ Component: module.default })),
      },
      {
        path: RouterManager.path('about'),
        lazy: () => import('@/pages/about').then((module) => ({ Component: module.default })),
      },
      {
        path: RouterManager.path('portfolio'),
        lazy: () => import('@/pages/portfolio').then((module) => ({ Component: module.default })),
      },
    ],
  },
];
