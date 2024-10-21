<template>
	<nav class="from-primary to-accent bg-gradient-to-r sticky top-0 z-50 w-full text-primary-content shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
		<div class="flex flex-wrap items-center justify-between mx-auto p-3">
			<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse hover:scale-110 hover:rotate-[23deg] hover:bg-opacity-80 transition-all duration-300 bg-opacity-40 bg-neutral rounded-full" title="Application-Version-Manager">
				<img src="@/assets/logo.png" class="h-14" />
			</a>

			<div class="flex items-center">
				<RouterLink :to="path" active-class="active" :title="name" class="flex items-center space-2 gap-2 group px-1" v-for="({ meta, name, path }, index) in cMenu" :key="`menu-${index}`" @mouseenter="slideMenuName(path, 'open')" @mouseleave="slideMenuName(path, 'close')">
					<span :class="[meta?.icon]" class="mdi text-xl group-hover:bg-secondary-focus mask mask-squircle p-3 transition-all duration-150"></span>
					<span :id="`nav-menu-${meta?._id}`" :style="$route.matched.some(({ path : matchedPath}) => matchedPath === path) && meta?.showName ? `width: ${String(name)?.length*9}px !important` : ''" class="w-0 ease-out select-none overflow-hidden transition-all duration-300 text-sm tracking-wider whitespace-nowrap">{{ name }}</span>
				</RouterLink>
			</div>
		</div>
		
	</nav>

	<div class="min-h-[calc(100vh-80px)] p-2 ">
		<RouterView />
	</div>
</template>

<script lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useMainStore } from './stores/main';
import { orderBy } from 'lodash';
import AboutView from './views/AboutView.vue';

export default {
	components : {
		RouterLink,
		RouterView,
	},
	setup() {
		return {
			router : useRouter(),
			store : {
				main : useMainStore(),
			}
		}
	},
	watch: {

	},
	data: () => ({
		refreshMenu : 0,
	}),
	computed: {
		cMenu() {
			this.refreshMenu;

			return orderBy(this.router.options.routes, 'meta.sortIndex', 'asc');
		}
	},
	created() {
		// Just for testing
		setTimeout(() => {
			this.router.addRoute({
				path: '/profile',
				name: this.store.main.user.name,
				meta : {
					_id : this.store.main.generateObjectId(),
					icon : 'mdi-account',
					showName : true,
					sortIndex : 5,
				},
				component: AboutView
			});
			
			this.refreshMenu++;
		}, 2000);
	},
	methods : {
		slideMenuName(path : any, action : 'open' | 'close') {
			if(this.store.main.settings.nav.animation) {
				const routeData = this.router.resolve(path);
	
				if(routeData?.meta?.showName && !this.$route.matched.some(({ path : matchedPath}) => matchedPath === routeData.path)) {
					const navBar = document.getElementById(`nav-menu-${routeData.meta._id}`);
		
					if(navBar) {
						if(action === 'open') {
							navBar.style.width = `${navBar.innerText.length*9}px`;
						} else {
							navBar.style.width = '0'
						}
					}
				}
			}
        },
	}
}
</script>

<style>
</style>