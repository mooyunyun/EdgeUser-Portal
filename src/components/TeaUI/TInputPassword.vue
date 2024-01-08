<script setup>
import Password from "primevue/password";
import T from "@/components/TeaUI/T.js";

let props = defineProps(T.commonProps("invalid", "error"))
</script>

<template>
  <Password :class="{
  'p-invalid': T.isDefined(props, 'invalid|error')
  }"></Password>
</template>