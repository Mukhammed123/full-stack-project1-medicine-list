import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './plugins/router';
import store from './plugins/store';


Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
