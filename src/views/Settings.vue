<template>
    <div class="grid grid-cols-12 h-screen">
        <div class="col-span-10">CONTENT</div>
        <div class="col-span-2 flex flex-col gap-2 from-primary to-accent bg-gradient-to-tr p-2 rounded-md">
            <div class="flex gap-2 bg-neutral p-2 rounded-md">
                <span class="mdi mdi-application-array-outline"></span>
                <span>App</span>
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

    })
}
</script>

<style>

</style>