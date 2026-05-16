import { Manager } from '@lomray/react-route-manager';

import { ROUTES } from '@/shared/constants/navigationMenu.ts';

export const RouterManager = new Manager({
  routes: {
    home: {
      url: ROUTES.HOME,
    },
    about: {
      url: ROUTES.ABOUT,
    },
    portfolio: {
      url: ROUTES.PORTFOLIO,
    },
  },
});
