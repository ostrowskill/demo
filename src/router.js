import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// sidemenu routes
import userDashoard from './views/UserDashboard.vue'
import Charts from './views/Charts.vue'
import Settings from './views/Settings.vue'
import Performance from './views/Performance'
import Buisness from './views/Buisness.vue'
import DevOps from './views/DevOps.vue'

//just for now
import User from './views/User.vue'

import {
  isLoggedIn
} from './utils/auth';

Vue.use(Router)

// helper to check if user is logged, if not -> redirect to notauthorized
function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/notauthorized'
    });
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{

      // for presentation change HOME -> USER
      path: '/',
      name: 'home',
      component: User
    },
    {
      path: '/user',
      name: 'user',
      //beforeEnter: requireAuth,
      component: () => import('./views/User.vue'),
      children: [
        { path:'/user/', name: 'dashboard', component: userDashoard },
        { path:'/user/charts', name: 'charts', component: Charts },
        { path:'/user/settings', name: 'settings', component: Settings },
        { path: '/user/performance', name: 'performance', component: Performance},
        { path: '/user/buisness', name: 'buisness', component: Buisness},
        { path: '/user/devops', name: 'devops', component: DevOps},
      ]
    },
    {
      path: '/callback',
      name: 'callback',

      component: () => import('./views/Callback.vue')
    },
    {
      path: '/notauthorized',
      name: 'notauthorized',

      component: () => import('./views/NotAuthorized.vue')
    },
  ]
})
