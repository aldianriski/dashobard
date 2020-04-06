import Vue from 'vue';
import Router from 'vue-router';
import appRoutes from './views/app/router';
import store from './store/store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/',
      name: 'index',
      children: appRoutes,
      component: () => import('./views/app/index.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/forgotpass',
      name: 'forgotpass',
      component: () => import('./views/auth/Forgotpass.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/auth/Register.vue'),
      meta: {
        public: true
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Default scroll position will be 0, 0 unless overridden by a saved position
    const position = {
      x: 0,
      y: 0,
    };

    // Override default with saved position (if it exists)
    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }

    // Listen for scrollBeforeEnter event and set scroll position
    return new Promise((resolve) => {
      this.app.$root.$once('scrollBeforeEnter', () => {
        resolve(position);
      });
    });
  },
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!Vue.prototype.$session.get('jwt');

  if (!isPublic && !loggedIn) {
    return next({
      path: '/dashboard',
      query: { redirect: to.fullPath }  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})


export default router;
