import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(StoreData);
const router = new VueRouter({
    routes,
    mode: 'history'
});
// initialize(store, router);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
