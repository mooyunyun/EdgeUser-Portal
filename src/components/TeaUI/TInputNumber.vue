<script setup>
import InputNumber from "primevue/inputnumber";
</script>

<template>
  <InputNumber>
    <template #incrementbuttonicon>
      <slot name="incrementbuttonicon"></slot>
      <slot name="prefix"></slot>
    </template>
    <template #decrementbuttonicon>
      <slot name="decrementbuttonicon"></slot>
      <slot name="suffix"></slot>
    </template>
  </InputNumber>
</template>