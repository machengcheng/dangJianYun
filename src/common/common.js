import axios from 'axios';
import urlApi from './api';
import httpAxios from './http';
import VueHub from 'vue';

export default {
    install(Vue, options) {
        Vue.prototype.$vueHub = new VueHub();
        Vue.prototype.$axios = axios;
        Vue.prototype.$urlApi = urlApi;
        Vue.prototype.$http = httpAxios;
        Vue.prototype.$localStorage = window.localStorage;
        Vue.prototype.$location = window.location;
    }
}
