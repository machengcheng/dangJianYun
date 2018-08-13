import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import mainRouter from './mainRouter';

export let constantRouterMap = {};

constantRouterMap = mainRouter;

export default new Router({
  routes: constantRouterMap
});
