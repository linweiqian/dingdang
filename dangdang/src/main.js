import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入vant-UI组件
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)
// 引入字体图片文件
import "./assets/font/iconfont.css";
//引入bootstrap组件
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false;
// 基本样式
import "./assets/base/base.css";
//引入swiper-ui组件
import "swiper/dist/css/swiper.css";
// 引入动画组件
import "animate.css";
//引入axios
import axios from "axios";
import VueAwesomeSwiper from "vue-awesome-swiper"

Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
