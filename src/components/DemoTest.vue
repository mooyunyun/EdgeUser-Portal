<script setup>
import {inject, onMounted} from "vue";

const props = defineProps({
})

const dialogRef = inject('dialogRef');
onMounted(() => {
  console.log("dialogRef.value.data:", dialogRef.value.data)
})
</script>

<template>
  This is demo.
</template>