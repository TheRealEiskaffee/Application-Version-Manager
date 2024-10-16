<template>
	<div class="bg-base-100">
		<nav class="bg-primary rounded-b-md sticky top-0 z-50 mx-8">
			<div class="flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">A.V.M</span>
				</a>
				<div class="flex gap-4">
					<RouterLink to="/">Test</RouterLink>
					<RouterLink to="/">Test</RouterLink>
					<RouterLink to="/">Test</RouterLink>
					<RouterLink to="/">Test</RouterLink>
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