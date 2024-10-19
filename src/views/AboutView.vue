<template>
  <Card :title="$route.name"></Card>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';


export default {
	components : {
		Card,
	}
}
</script>
