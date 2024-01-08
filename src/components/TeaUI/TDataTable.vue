<script setup>
import DataTable from "primevue/datatable";

const props = defineProps({
  // size
  small: null,
  large: null,

  // celled
  celled: null
})

// size
let size = undefined
if (props.small !== undefined) {
  size = "small"
}
if (props.large !== undefined) {
  size = "large"
}

// celled
let showGridlines = false
if (props.celled !== undefined) {
  showGridlines = true
}
</script>

<template>
  <DataTable :size="size" :showGridlines="showGridlines">
    <slot></slot>
  </DataTable>
</template>

<style scoped>
:deep(tr:hover) {
  background: var(--surface-50);
}
</style>