<template>
    <div class="avatar">
        <div class="mask mask-squircle h-12 w-12">
            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"/>
        </div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
    name : 'Avatar',
    props : {
        userId : String
    },
    data : () => ({
        _id : getCurrentInstance()?.uid
    })
}
</script>
  