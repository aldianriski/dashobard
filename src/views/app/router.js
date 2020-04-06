import Dashboard from './menu/dashboard/Dashboard.vue';
import Riwayat from './menu/riwayat/Riwayat.vue';
import Pengaturan from './menu/pengaturan/Pengaturan.vue';
import Multiple from './menu/multiple/Multiple.vue';
import Retur from './menu/retur/Retur.vue';

import Profile from './menu/profile/Profile.vue';

const appRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/riwayat',
    name: 'Riwayat',
    component: Riwayat,
  },
  {
    path: '/pengaturan',
    name: 'Pengaturan',
    component: Pengaturan,
  },
  {
    path: '/multiple',
    name: 'Multiple',
    component: Multiple,
  },
  {
    path: '/retur',
    name: 'Retur',
    component: Retur,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },


];
export default appRoutes;
