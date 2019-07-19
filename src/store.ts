import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'camera': {},
  },
  mutations: {
    setValue(state, {key, value}) {
      if (typeof value === 'object') {
        state[key] = {...state[key], ...value  };
      } else {
        state[key] = value;
      }
    },
  },
  actions: {

  },
});
