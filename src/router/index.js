import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 规定路由相关权限放置于全局变量auth中
        if (window.auth && !window.auth[record.meta.authKey]) {
            next({ path: from.path }); // 权限验证不通过则返回之前页面
        } else {
            next();
        }
    } else {
        next();
    }
});

// 官方给出的解决vue-router 3.1.0+ NavigationDuplicated 的办法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject){
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch(err => err);
};

export default router;
