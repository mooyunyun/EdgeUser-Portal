<script setup>
import {defineProps} from "vue"

const props = defineProps({
	value: 0
})

const value = props.value
// TODO support langs
let valueFormat = ""
if (value <= 0) {
	valueFormat = "0"
} else if (value < 10000) {
	valueFormat = value.toString()
} else if (value < 100000000 ) {
	valueFormat = (value / 10000) + "万"
} else {
	valueFormat = (value / 100000000) + "亿"
}

</script>

<template>
{{valueFormat}}
</template>