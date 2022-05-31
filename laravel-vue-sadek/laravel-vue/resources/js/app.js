require('./bootstrap');
windows.Vue = requeire('vue')

Vue.component('mainapp', requeire('./components.vue/mainapp.vue')).default
const app = new Vue ({
    el: '#app'
 })
