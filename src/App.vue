<template>
	<div class="bg-base-100">
		<nav class="from-primary to-primary-focus bg-gradient-to-tl rounded-b-md sticky top-0 z-50 mx-16 text-primary-content">
			<div class="flex flex-wrap items-center justify-between mx-auto p-3">
				<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse hover:scale-110 hover:rotate-[23deg] hover:bg-opacity-80 transition-all duration-300 bg-opacity-40 bg-neutral rounded-full" title="Application-Version-Manager">
					<img src="@/assets/logo.png" class="h-14" />
				</a>
				<!-- Workspaces -->
				<div class="flex gap-2 items-center relative">
					<RouterLink to="/dashboard" active-class="active" class="hover:bg-primary-focus hover:scale-110 mask mask-squircle p-3 transition-all duration-150" title="Dashboard">
						<span class="mdi mdi-view-dashboard-variant text-xl "></span>
					</RouterLink>
					<RouterLink to="/versions" active-class="active" class="hover:bg-primary-focus hover:scale-110 mask mask-squircle p-3 transition-all duration-150" title="Versions">
						<span class="mdi mdi-source-merge text-xl"></span>
					</RouterLink>
					<RouterLink to="/download" active-class="active" class="hover:bg-primary-focus hover:scale-110 mask mask-squircle p-3 transition-all duration-150" title="Download">
						<span class="mdi mdi-download text-xl"></span>
					</RouterLink>
					<RouterLink to="/settings" active-class="active" class="hover:bg-primary-focus hover:scale-110 mask mask-squircle p-3 transition-all duration-150" title="Settings">
						<span class="mdi mdi-cog text-xl"></span>
					</RouterLink>
					<RouterLink to="/logout" active-class="active" class="hover:bg-primary-focus hover:scale-110 mask mask-squircle p-3 transition-colors duration-150" title="Logout">
						<span class="mdi mdi-logout text-xl"></span>
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
}
</script>
<style scoped>
.active {
	@apply bg-primary-focus
}
</style>