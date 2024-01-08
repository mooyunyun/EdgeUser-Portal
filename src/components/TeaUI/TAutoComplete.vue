<script setup>
import AutoComplete from "primevue/autocomplete";

const props = defineProps({
  options: null
})

</script>

<template>
  <AutoComplete :suggestions="options"></AutoComplete>
</template>