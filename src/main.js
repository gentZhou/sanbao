import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
// import "./assets/font/iconfont.css";
import SvgIcon from "./components/SvgIcon";
import "@/util/setRem";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// rem适配
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("svg-icon", SvgIcon);
// 初始化样式
import "@/styles/index.less";
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
