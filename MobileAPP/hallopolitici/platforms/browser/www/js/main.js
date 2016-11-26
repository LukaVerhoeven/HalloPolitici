var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.component('RandomWord', require('./components/RandomWord.vue'));

const vm = new Vue({
    el: '#app'
});
