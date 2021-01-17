import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//firebase
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig.js";
// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
