<template>
    <div class="w-full">
        <input v-model="cValue" :type="type" :placeholder="placeholder" class="input input-sm" />
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
    name : 'Input',
    props : {
        modelValue : String,
        userId : String,
        type : {
            type : String,
            default : 'text'
        },
        placeholder : String,
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
  