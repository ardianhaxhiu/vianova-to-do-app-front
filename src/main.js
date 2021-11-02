import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import common from "@/helpers/common";


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import axios from "axios";

Vue.mixin(common);


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toast, {
  timeout: 4000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
});


Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App),
  /*created() {
        if (confirm('Reload site?. Change you made may not be saved.')) {
          this.setToken(localStorage.getItem('token'))
          console.log("hahaha")
          return false;
        } else {
          this.setToken(localStorage.getItem('token'))
          console.log(store.getters.getUser)
          console.log('reload page now');
        }
  }*/
}).$mount('#app')
