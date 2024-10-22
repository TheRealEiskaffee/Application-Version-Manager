<template>
    <Card title="API">
        <Input v-model="test" placeholder="Test"/>
    </Card>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import Checkbox from '@/components/Checkbox.vue';
import { useMainStore } from '../../stores/main';
import Input from '@/components/Input.vue';


export default {
    components : {
        Card,
        Checkbox,
        Input
    },
    setup() {
        return {
            store : {
                main : useMainStore()
            }
        }
    },
    data : () => ({

        test : 'test'
    })
}
</script>
  