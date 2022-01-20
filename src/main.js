import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import i18n from "vue-i18n";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import carousel from "vue-owl-carousel";
import OtpInput from "@bachdgvn/vue-otp-input";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import VueGeolocation from 'vue-browser-geolocation';
import VueGoogleAutocomplete from 'vue-google-autocomplete'

import Inview from "vueinview";

Vue.config.productionTip = false;

Vue.use("font-awesome-icon", FontAwesomeIcon);
Vue.use(Inview);
Vue.use(carousel);
Vue.use(VModal);
Vue.component("v-otp-input", OtpInput);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.use(VueGeolocation);
Vue.use(VueGoogleAutocomplete, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places',
  },
})


import "bootstrap/dist/css/bootstrap.css";
import 'vue-googlemaps/dist/vue-googlemaps.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import "animate.css"
import 'vue-js-modal/dist/styles.css';
import "animate.css";

import "./assets/scss/main.scss";

Vue.prototype.$http.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers = Object.assign(
        {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        },
        config.headers
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
