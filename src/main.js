import { createApp } from 'vue';
// import {createBootstrap} from 'bootstrap-vue-next'
import './style.css';
import App from './App.vue';
import router from './router';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": true,
  // "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  // "showDuration": "300",
  // "hideDuration": "1000",
  // "timeOut": "5000",
  // "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
  // "maxToasts" : "1",
}
createApp(App)
  .use(router)
  .use(Toast, options)  
  .mount('#app');