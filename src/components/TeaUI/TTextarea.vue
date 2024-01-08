<script setup>
import Textarea from "primevue/textarea";
import T from "@/components/TeaUI/T.js";

let props = defineProps(T.commonProps("invalid", "error"))
</script>

<template>
  <Textarea :class="{
    'p-invalid': T.isDefined(props, 'invalid|error')
  }"></Textarea>
</template>