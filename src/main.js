import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import router from './router';
import Brown from 'brown-ui';
import App from './App';

import 'brown-ui/dist/brown.css';
import './main.scss';

Vue.use(Brown);
Vue.use(Brown.Previewer);
Vue.use(Brown.ContextMenu);
Vue.use(VueRouter);

const inElectron = /^\?.*env\=electron.*$/.test(window.location.search);

Vue.mixin({
    data(){
        return { ENV: inElectron ? 'electron' : 'browser' };
    }
});

window.App = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App },
    beforeCreate(){
        let { pathname, search } = window.location;
        if (pathname && pathname.startsWith('/auth')) {
            return;
        }

        const query = search &&
            search.slice(1).split('&').map(q => {
                return q.split('=');
            }).reduce((obj, q) => {
                obj[q[0]] = q[1];
                return obj;
            }, {});

        this.query = query;
        this.fullscreen = !!(query.fullscreen - 0);
        this.path = pathname;
    },
    // created(){
    //     window._$tab = this.$tab;
    // },

    mounted(){
        this.$router.push({
            path: this.path,
            query: this.query
        });
    }
});