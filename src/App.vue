<template>
	<div class="bg-base-100">
		<nav class="bg-primary rounded-b-md sticky top-0 z-50 mx-8 text-primary-content">
			<div class="flex flex-wrap items-center justify-between mx-auto p-3">
				<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">A.V.M</span>
				</a>
				<!-- Workspaces -->
				<div class="flex gap-2 items-center overflow-hidden">
					<RouterLink to="/" class="hover:bg-primary-focus mask mask-squircle p-3 transition-all duration-150" title="Dashboard">
						<span class="mdi mdi-view-dashboard-variant text-xl"></span>
					</RouterLink>
					<RouterLink to="/" class="hover:bg-primary-focus mask mask-squircle p-3 transition-all duration-150" title="Versions">
						<span class="mdi mdi-source-merge text-xl"></span>
					</RouterLink>
					<RouterLink to="/" class="hover:bg-primary-focus mask mask-squircle p-3 transition-all duration-150" title="Download">
						<span class="mdi mdi-download text-xl"></span>
					</RouterLink>
					<RouterLink to="/" class="hover:bg-primary-focus mask mask-squircle p-3 transition-all duration-150" title="Settings">
						<span class="mdi mdi-cog text-xl"></span>
					</RouterLink>
					<RouterLink to="/" class="hover:bg-primary-focus mask mask-squircle p-3 transition-colors duration-150" title="Logout">
						<span class="mdi mdi-logout text-xl"></span>
					</RouterLink>
				</div>
			</div>

		</nav>
	
		<div class="h-full py-4 mx-8">
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
}
</script>