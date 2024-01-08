<script setup>
import Badge from "primevue/badge";

const props = defineProps({
  success: null,
  info: null,
  warning: null,
  danger: null,

  warn: null,
  error: null
})

let severity = ""
if (props.success !== undefined) {
  severity = "success"
}
if (props.info !== undefined) {
  severity = "info"
}
if (props.warning !== undefined || props.warn !== undefined) {
  severity = "warning"
}
if (props.danger !== undefined || props.error !== undefined) {
  severity = "danger"
}

</script>

<template>
  <Badge :severity="severity"></Badge>
</template>