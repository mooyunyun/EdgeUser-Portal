<script setup>
import InputSwitch from "primevue/inputswitch";
import T from "@/components/TeaUI/T.js";

let props = defineProps(T.commonProps("invalid", "error"))
</script>

<template>
  <InputSwitch :class="{
  'p-invalid': T.isDefined(props, 'invalid|error')
  }"></InputSwitch>
</template>