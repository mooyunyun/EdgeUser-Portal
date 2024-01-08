<script setup>
import Checkbox from 'primevue/checkbox';
import T from "@/components/TeaUI/T.js";
import TFlex from "@/components/TeaUI/TFlex.vue";

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
      <Checkbox v-bind="$attrs" :input-id="inputId"></Checkbox>
      <label :for="inputId">&nbsp; {{ label }}</label>
    </TFlex>
</template>
