<script setup>
import Message from "primevue/message";
import T from "@/components/TeaUI/T.js";
import {ref} from "vue";

let props = defineProps(T.commonProps("warn"))

// severity
let severity = undefined;
["secondary", "success", "info", "warn", "error"].forEach(function (v) {
  if (T.isDefined(props, v)) {
    severity = v
  }
})

if (props.warning !== undefined) {
  severity = "warn"
}

if (props.danger !== undefined) {
  severity = "error"
}

</script>

<template>
  <Message :severity="severity"><slot></slot></Message>
</template>