import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import VueSweetalert2 from 'vue-sweetalert2';
import ApiService from './services/apiService'
import { TokenService } from './services/storageService'
import VeeValidate from 'vee-validate';
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueTour from 'vue-tour';
import VueSession from 'vue-session';
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
var options = {
  persist: true
}
Vue.use(VueSession, options)
// You could use your own fancy-schmancy custom styles.
// We'll use the defaults here because we're lazy.
import 'vue-tour/dist/vue-tour.css';
import JsonCSV from 'vue-json-csv';
Vue.component('downloadCsv', JsonCSV);
Vue.component('vue-multiselect', window.VueMultiselect.default)
Vue.use(VueTour);
Vue.use(CKEditor);

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

axios.interceptors.request.use(
  (config) => {
    let token = Vue.prototype.$session.get('jwt');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token.token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

if (TokenService.getToken()) {
}

Vue.use(VueSweetalert2);

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields',
  // This is not required but avoids possible naming conflicts
  errorBagName: 'veeErrors',
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
