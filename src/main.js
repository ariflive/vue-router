import Vue from 'vue'
import VueRouter from 'vue-router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
