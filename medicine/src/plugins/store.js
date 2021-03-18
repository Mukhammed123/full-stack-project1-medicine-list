import Vue from 'vue';
import Vuex from 'vuex';
// import { db } from '@/firebase';

import sheetOne from '@/plugins/modules/sheetOne';
import sheetTwo from '@/plugins/modules/sheetTwo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      name: process.env.VUE_APP_NAME,
      package: {
        version: process.env.VUE_APP_PACKAGE_VERSION,
        author: process.env.VUE_APP_PACKAGE_AUTHOR,
        contributors: process.env.VUE_APP_PACKAGE_CONTRIBUTORS,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {
    sheetOne,
    sheetTwo,
  },
});