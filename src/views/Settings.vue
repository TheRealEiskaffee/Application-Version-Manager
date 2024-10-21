<template>
    <!-- <div class="grid grid-cols-12 gap-2 h-full">
        <div class="col-span-10 bg-base-200 rounded-r-xl p-2">CONTENT</div>
        <div class="col-span-2 flex flex-col gap-2 from-primary via-secondary to-accent bg-gradient-to-tr p-2 rounded-l-xl">
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-application-array-outline"></span>
                <span class="select-none">Application</span>
            </div>
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-apple-icloud"></span>
                <span class="select-none">Api</span>
            </div>
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-disc"></span>
                <span class="select-none">Space</span>
            </div>
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-account-multiple"></span>
                <span class="select-none">Users</span>
            </div>
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-integrated-circuit-chip"></span>
                <span class="select-none">Integrations</span>
            </div>
        </div>
    </div> -->
    <div class="flex h-full w-full gap-2">
        <div class="bg-base-200 rounded-xl p-2 w-full">
            <RouterView />
        </div>
        <div class="w-16">
            <div class="flex fixed top-[88px] overflow-y-scroll flex-col gap-2 text-primary-content from-primary via-secondary to-accent bg-gradient-to-tr p-2 h-[calc(100vh-95px)] rounded-l-xl justify-center">
                <RouterLink :to="path" active-class="active" :title="name" class="flex items-center space-2 gap-2 group px-1" v-for="({ meta, name, path }, index) in cSubMenu" :key="`menu-${index}`" @mouseenter="slideMenuName(path, 'open')" @mouseleave="slideMenuName(path, 'close')">
					<span :class="[meta?.icon]" class="mdi text-xl group-hover:bg-secondary-focus mask mask-squircle p-3 transition-all duration-150"></span>
					<span :id="`nav-menu-${meta?._id}`" :style="meta?._id === $route?.meta?._id && meta?.showName ? `width: ${String(name)?.length*9}px !important` : ''" class="w-0 ease-out select-none overflow-hidden transition-all duration-300 text-sm tracking-wider whitespace-nowrap">{{ name }}</span>
				</RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import SimpleDate from 'simple-date-operation';

export default {
    components : {
        Card
    },
    setup() {
        return {
			store : {
                
			},
            SimpleDate,
        }
    },
    data : () => ({
    }),
    computed : {
        cSubMenu() {
            const actualRoute = this.$router.getRoutes().find(({ path }) => path === this.$route.matched[0].path);
            
            return actualRoute?.children
        }
    },
    created() {
    },
    methods: {
        slideMenuName() {

        }
    }
}
</script>

<style>

</style>