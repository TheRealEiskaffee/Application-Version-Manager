<template>
    <div class="flex items-center gap-2">
        <input :value="modelValue" class="checkbox" type="checkbox" /> {{ label }}
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
    name : 'Checkbox',
    props : {
        modelValue : Boolean,
        label : String
    },
    data : () => ({
        _id : getCurrentInstance()?.uid
    })
}
</script>
  