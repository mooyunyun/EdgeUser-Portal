<script setup>
const props = defineProps({
  definition: null
})
</script>

<template>
  <div class="p-datatable  p-datatable-gridlines" :class="{
   't-definition-table' : (props.definition !== undefined)
  }">
    <div class="p-datatable-wrapper">
      <table class="p-datatable-table">
        <slot></slot>
      </table>
    </div>
  </div>
</template>