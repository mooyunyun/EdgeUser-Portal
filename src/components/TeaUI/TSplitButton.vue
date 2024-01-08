<script setup>
import SplitButton from "primevue/splitbutton";
import T from "@/components/TeaUI/T.js";
import {ref} from "vue";

const props = defineProps(T.commonProps("size"))

// severity
let severity = undefined;
["secondary", "success", "info", "warning", "help", "danger"].forEach(function (v) {
  if (T.isDefined(props, v)) {
    severity = v
  }
})
if (T.isDefined(props, "error")) {
  severity = "danger"
}


// size
const size = ref("")
if (T.isDefined(props, "small")) {
  size.value = "small"
}
if (T.isDefined(props, "large")) {
  size.value = "large"
}

</script>

<template>
  <SplitButton :severity="severity" :size="size"></SplitButton>
</template>