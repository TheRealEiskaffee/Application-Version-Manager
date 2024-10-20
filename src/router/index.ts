import { createRouter, createWebHistory } from 'vue-router'

function generateObjectId() {
    const randomHex = (length : number) => {
   			return Array.from({ length })
   				.map(() => Math.floor(Math.random() * 16).toString(16))
   				.join('');
   		  },
		  timestamp = Math.floor(new Date().getTime() / 1000).toString(16),
    	  machineId = randomHex(4),
    	  processId = randomHex(4),
    	  counter = randomHex(8);

    return `${timestamp}${machineId}${processId}${counter}`;
}

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior() {
		return {
			top : 0,
			behavior: 'smooth',
		}
	},
	routes : [{
		path: '/dashboard',
		name: 'Dashboard',
		meta : {
			_id : generateObjectId(),
			icon : 'mdi-view-dashboard-variant',
			showName : true,
			sortIndex : 1,
		},
		component: () => import('../views/AboutView.vue')
	}, {
		path: '/versions',
		name: 'Versions',
		meta : {
			_id : generateObjectId(),
			icon : 'mdi-source-merge',
			showName : true,
			sortIndex : 2,
		},
		component: () => import('../views/Versions.vue')
	}, {
		path: '/download',
		name: 'Download',
		meta : {
			_id : generateObjectId(),
			icon : 'mdi-download',
			showName : true,
			sortIndex : 3,
		},
		component: () => import('../views/Download.vue')
	}, {
		path: '/settings',
		name: 'Settings',
		meta : {
			_id : generateObjectId(),
			icon : 'mdi-cog',
			showName : true,
			sortIndex : 4,
		},
		component: () => import('../views/AboutView.vue')
	}, {
		path: '/logout',
		name: 'Logout',
		meta : {
			_id : generateObjectId(),
			icon : 'mdi-logout',
			showName : false,
			sortIndex : 6,
		},
		redirect : ''
	}],
})
