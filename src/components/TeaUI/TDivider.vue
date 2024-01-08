<script setup>
import Divider from "primevue/divider";

const props = defineProps({
  vertical: null,
  horizontal: null,

  solid: null,
  dashed: null,
  dotted: null
})

// layout
let layout = "horizontal"
if (props.vertical !== undefined) {
  layout = "vertical"
}

// type
let lineType = "solid"
if (props.dashed !== undefined) {
  lineType = "dashed"
}
if (props.dotted !== undefined) {
  lineType = "dotted"
}
</script>

<template>
  <Divider :layout="layout" :type="lineType">
    <slot></slot>
  </Divider>
</template>