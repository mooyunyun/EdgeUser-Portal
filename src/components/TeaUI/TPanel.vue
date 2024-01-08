<script setup>
import Panel from "primevue/panel";
</script>

<template>
  <Panel>
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
    <template #icons>
      <slot name="icons"></slot>
    </template>

    <slot></slot>
  </Panel>
</template>