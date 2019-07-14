import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'aframe';
import 'aframe-environment-component';
import './portals';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
