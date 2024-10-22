<template>
    <div class="flex items-center gap-2">
        <input v-model="cValue" :class="{ 'disabled' : disabled }" class="checkbox " type="checkbox" /> {{ label }}
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
    name : 'Checkbox',
    props : {
        modelValue : Boolean,
        label : String,
        disabled : Boolean
    },
    data : () => ({
        _id : getCurrentInstance()?.uid
    }),
    computed: {
        cValue : {
            get() {
                return this.modelValue;
            },
            set(value : Boolean) {
                this.$emit('update:modelValue', value);
            },
        }
    }
}
</script>
  