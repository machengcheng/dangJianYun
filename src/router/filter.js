import NProgress from 'nprogress';
import router from './';

router.beforeEach((to, from, next) => {
    NProgress.start(); //开启progress
    next()
});

router.afterEach(() => {
    NProgress.done(); //结束Progress
});
