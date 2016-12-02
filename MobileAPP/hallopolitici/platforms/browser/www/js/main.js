var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.component('Login', require('./components/Login.vue'));
Vue.component('LikePoliticians', require('./components/LikePoliticians.vue'));

Vue.config.ignoredElements = '<fb:login-button></fb:login-button>';

const vm = new Vue({
    el: '#app'
});
