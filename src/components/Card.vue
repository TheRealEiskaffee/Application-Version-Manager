<template>
    <div class="bg-base-300 p-2 rounded-md">
        <div v-if="title || $slots.title" class="divider">
            <slot name="title">
                {{ title }}
            </slot>
        </div>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
    name : 'Card',
    props : {
        title : String
    },
    data : () => ({
        _id : getCurrentInstance()?.uid
    })
}
</script>
  