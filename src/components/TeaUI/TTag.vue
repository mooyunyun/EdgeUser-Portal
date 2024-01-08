<script setup>
import Tag from 'primevue/tag'
import T from "@/components/TeaUI/T.js";
import {onMounted, ref} from "vue";

let props = defineProps(T.commonProps("label", "disabled"))

// label
let value = null
if (typeof props.label == "string") {
  value = props.label
}

// severity
let severity = undefined;
["success", "info", "warning", "danger"].forEach(function (v) {
  if (T.isDefined(props, v)) {
    severity = v
  }
})
if (T.isDefined(props, "error")) {
  severity = "danger"
}

// text
let tagRef = ref(null)
if (T.isDefined(props, "text|basic")) {
  onMounted(() => {
    let el = tagRef.value.$el
    let backgroundColor = getComputedStyle(tagRef.value.$el).backgroundColor
    if (backgroundColor != "rgb(0, 0, 0)") {
      el.style.border = "1px " + backgroundColor + " solid"
    }
    el.style.backgroundColor = "white"
    el.style.color = backgroundColor
  })
}
</script>

<template>
  <Tag :value="value" :severity="severity" :class="{
    'p-disabled': props.disabled !== undefined
  }" ref="tagRef" :style="T.composeStyle(props)">
    <slot></slot>
  </Tag>
</template>