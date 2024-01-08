<script setup>
</script>

<template>
  <tbody class="p-datatable-tbody t-table-tbody">
    <slot></slot>
  </tbody>
</template>

<style scoped>
.t-definition-table .t-table-tbody :deep(td:first-child) {
  font-weight: bold;
  width: 10rem;
  background: var(--surface-100);
}

:deep(tr:hover) {
  background: var(--surface-50);
}
</style>