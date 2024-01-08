<script setup>
import Button from "primevue/Button";
import T from "@/components/TeaUI/T.js"

let props = defineProps(T.commonProps("warn"))

let severity = undefined;
["secondary", "success", "info", "warning", "help", "danger"].forEach(function (v) {
  if (T.isDefined(props, v)) {
    severity = v
  }
})
if (T.isDefined(props, "error")) {
  severity = "danger"
}
if (T.isDefined(props, "warn")) {
  severity = "warning"
}

let isOutlined = false
if (T.isDefined(props, "basic")) {
  isOutlined = true
}

let buttonType = "button"
if (T.isDefined(props, "submit")) {
  buttonType = "submit"
}
if (T.isDefined(props, "reset")) {
  buttonType = "reset"
}
if (T.isDefined(props, "button")) {
  buttonType = "button"
}

let size = ""
if (T.isDefined(props, "small")) {
  size = "small"
}
if (T.isDefined(props, "large")) {
  size = "large"
}
</script>

<template>
  <Button :severity="severity" :outlined="isOutlined" :type="buttonType" :size="size" ref="buttonRef"
          :style="T.composeStyle(props)">
    <slot></slot>
  </Button>
</template>
