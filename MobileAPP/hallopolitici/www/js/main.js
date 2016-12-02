var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.component('RandomWord', require('./components/RandomWord.vue'));

Vue.config.ignoredElements = '<fb:login-button ></fb:login-button >';

const vm = new Vue({
    el: '#app'
});
