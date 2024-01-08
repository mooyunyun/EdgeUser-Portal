<script setup>
import RadioButton from "primevue/radiobutton";
import TFlex from "@/components/TeaUI/TFlex.vue";
import T from "@/components/TeaUI/T.js";

const props = defineProps({
  label: null,
  inputId: null
})

let label = props.label
let inputId = props.inputId
if (inputId == undefined) {
  inputId = 'checkbox-' + T.nextId()
}

</script>

<template>
  <TFlex>
    <RadioButton v-bind="$attrs" :input-id="inputId"></RadioButton>
    <label :for="inputId">&nbsp; {{ label }}</label>
  </TFlex>
</template>