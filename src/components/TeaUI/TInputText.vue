<script setup>
import InputText from "primevue/inputtext";
import {ref} from "vue";
import T from "@/components/TeaUI/T.js";

const props = defineProps({
  small: null,
  large: null,

  invalid: null,
  error: null
})

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
  <InputText :size="size" :class="{
    'p-invalid': props.invalid !== undefined || props.error !== undefined
  }"></InputText>
</template>