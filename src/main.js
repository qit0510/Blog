
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios';
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/border.css';
import '@/assets/style/custom.css';

Vue.use(VueQuillEditor);
Vue.config.productionTip = false;
Vue.use(ElementUI);
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/';
} else {
  axios.defaults.baseURL = 'http://localhost';
}
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


