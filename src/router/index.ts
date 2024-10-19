import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior() {
		return {
			top : 0,
			behavior: 'smooth',
		}
	},
	routes: [{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/settings',
		name: 'Settings',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/versions',
		name: 'Versions',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/download',
		name: 'Download',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/Download.vue')
	}]
})

export default router
