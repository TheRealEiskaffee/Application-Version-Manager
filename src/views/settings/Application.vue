<template>
    <Card title="Application">
        <Checkbox v-model="store.main.settings.nav.animation" label="Show Menu Animation"></Checkbox>
    </Card>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import Checkbox from '@/components/Checkbox.vue';
import { useMainStore } from '../../stores/main';


export default {
    components : {
        Card,
        Checkbox
    },
    setup() {
        return {
            store : {
                main : useMainStore()
            }
        }
    }
}
</script>
  