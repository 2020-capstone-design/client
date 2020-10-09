import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
      meta: { auth: false },
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
      meta: { auth: false },
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/RestaurantAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:restaurant_num',
      component: () => import('@/views/RestaurantEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/editImage/:restaurant_num&:restaurant_logo',
      component: () => import('@/views/MainEditImage.vue'),
      name: 'logo',
      props: true,
      meta: { auth: true },
    },
    {
      path: '/menu/:restaurant_num',
      component: () => import('@/views/MenuPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/member',
      component: () => import('@/views/MemberPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/check_password',
      component: () => import('@/views/CheckPasswordPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/edit_password/:owner_id',
      component: () => import('@/views/EditPasswordPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/download',
      component: () => import('@/views/UserGuide.vue'),
      meta: { auth: true },
    },
    {
      path: '/hello/',
      component: () => import('@/views/HelloPage.vue'),
      meta: { auth: false },
    },
    {
      path: '/find',
      component: () => import('@/views/FindIdOrPassword.vue'),
      meta: { auth: false },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  if (!to.meta.auth && store.getters.isLogin) {
    console.log('로그인 되어있습니다.');
    next('/main');
    return;
  }
  next();
});

export default router;
