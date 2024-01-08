<script setup>
import Toolbar from "primevue/toolbar";
</script>

<template>
  <Toolbar>
    <template #start><slot name="start"></slot></template>
    <template #center><slot name="center"></slot></template>
    <template #end><slot name="end"></slot></template>
    <slot></slot>
  </Toolbar>
</template>