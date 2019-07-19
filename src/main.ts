import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'aframe';
import 'aframe-environment-component';
import 'aframe-extras';
import './a-components/portals';
import './a-components/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
