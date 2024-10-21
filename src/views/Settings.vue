<template>
    <div class="flex h-full w-full gap-2">
        <div class="bg-base-200 rounded-xl p-2 w-full">
            <RouterView />
        </div>
        <div class="w-16">
            <div class="flex fixed top-[88px] flex-col gap-2 overflow-y-scroll text-primary-content from-primary via-secondary to-accent bg-gradient-to-tr p-2 h-[calc(100vh-95px)] rounded-l-xl justify-center">
                <RouterLink :to="path" active-class="active" class="flex group items-center space-2 gap-2 group px-1" v-for="({ meta, name, path }, index) in cSubMenu" :key="`menu-${index}`">
                    <div class="fixed right-20 group-hover:visible invisible px-2 py-1 tracking-widest text-sm !bg-secondary select-none text-secondary-content rounded-md shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                        <p>{{ name }}</p>
                        <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-secondary border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                    </div>

                    <span :class="[meta?.icon]" class="mdi text-xl group-hover:bg-secondary-focus mask mask-squircle p-3 transition-all duration-150"></span>
					<span :id="`nav-menu-${meta?._id}`" :style="meta?._id === $route?.meta?._id && meta?.showName ? `width: ${String(name)?.length*9}px !important` : ''" class="w-0 ease-out select-none overflow-hidden transition-all duration-300 text-sm tracking-wider whitespace-nowrap">{{ name }}</span>
				</RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import { orderBy } from 'lodash';
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
            return orderBy(this.$router.getRoutes().find(({ path }) => path === this.$route.matched[0].path)?.children, 'meta.sortIndex', 'asc')
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style>

</style>