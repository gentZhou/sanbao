import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
Vue.use(VueRouter)

// 解决编程式导航两次点击报错
const originPush = VueRouter.prototype.push;;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originPush.call(this, location).catch(() => { });
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => { });
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}

const router=new VueRouter({
    mode:"history",
    routes,
    
})

router.beforeEach((to, from, next) => {
    if (to.matched.length ===0) {  //如果未匹配到路由
      from.name ? next({ name:from.name }) : next('/404');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    } else {
      next();    //如果匹配到正确跳转
    }
  });
export default router