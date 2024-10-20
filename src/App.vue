<template>
	<div class="bg-base-100">

		<nav class="from-primary to-primary-focus bg-gradient-to-tl rounded-b-md sticky top-0 z-50 mx-16 text-primary-content">
			
			<div class="flex flex-wrap items-center justify-between mx-auto p-3">
				<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse hover:scale-110 hover:rotate-[23deg] hover:bg-opacity-80 transition-all duration-300 bg-opacity-40 bg-neutral rounded-full" title="Application-Version-Manager">
					<img src="@/assets/logo.png" class="h-14" />
				</a>

				<!-- Workspaces??? -->
				<div class="flex gap-2 items-center">
					<RouterLink :to="path" active-class="active" :title="name" class="flex items-center space-2 gap-2 group" v-for="({ meta, name, path }, index) in $router.options.routes" :key="`menu-${index}`" @mouseenter="slideMenuName(path, 'open')" @mouseleave="slideMenuName(path, 'close')">
						<span :class="[meta?.icon]" class="mdi text-xl group-hover:bg-primary-focus mask mask-squircle p-3 transition-all duration-150"></span>
						<span :id="`nav-menu-${meta?._id}`" :style="meta?._id === $route?.meta?._id && meta?.showName ? `width: ${String(name)?.length*9}px !important` : ''" class="w-0 ease-out select-none overflow-hidden transition-all duration-300">{{ name }}</span>
					</RouterLink>
				</div>
			</div>
			
		</nav>
	
		<div class="h-full min-h-screen py-4 mx-16">
			<RouterView />
		</div>
	</div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
	components : {
		RouterLink,
		RouterView,
	},
	setup() {
		return {
		}
	},
	watch: {

	},
	data: () => ({

	}),
	computed: {

	},
	created() {
		
	},
	methods : {
		slideMenuName(path : any, action : 'open' | 'close') {
			const routeData = this.$router.resolve(path);

			if(routeData?.meta?.showName && routeData?.meta?._id !== this.$route?.meta?._id) {
				const navBar = document.getElementById(`nav-menu-${routeData.meta._id}`);
	
				if(navBar) {
				    if(action === 'open') {
				        navBar.style.width = `${navBar.innerText.length*9}px`;
				    } else {
				        navBar.style.width = '0'
				    }
				}
			}
        },
	}
}
</script>

<style>
</style>