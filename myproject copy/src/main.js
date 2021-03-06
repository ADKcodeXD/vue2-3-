import app from './app.vue'
import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(VueRouter)

new Vue({
    el: '#root',
    components: {
        app
    },
    render: h => h(app),
    router: router
})