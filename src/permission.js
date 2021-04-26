import NProgress from 'nprogress'
import router from './router'
import {
    routes
} from './router'

//不重定向白名单
const whiteList = ['/login'];
const whiteActiveList = ['/', '/dashboard', '/401', '/404'];
const allList = [];

router.beforeEach((to, from, next) => {
    if (allList.length === 0) {
        for (let index = 0; idex < routes.length; index++) {
            if (routes[index].children) {
                var childrenList = routes[index].children;
                for (let a = 0; a < childrenList.length; a++) {
                    allList.push(routes[index].path + "/" + childrenList[a].path);
                }
            } else {
                allList.push(routes[index].path);
            }
        }
    }
    // //向白名单中添加内容
    // const activeList = [];
    //进度条开始
    NProgress.start();
    next();
})

router.afterEach() => {
    NProgress.done();
}