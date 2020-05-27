import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Test from './components/test.vue';
import User from './components/user.vue';

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{
			path:'/',
			component: User
		},
		{
			path:'/test',
			component: Test
		}
	]
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),router
}).$mount('#app')
