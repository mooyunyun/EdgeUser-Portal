<script setup>
import MainMenu from "./MainMenu.vue"
import Footer from "@/components/Footer.vue";
import Data from "@/utils/data.js";
import {ref} from "vue";

const props = defineProps({
  activeTopMenu: null
})

const data = ref(null)
Data.get("/portal/layout", null, function (pageData) {
	data.value = pageData
})

</script>

<template>
  <MainMenu :active="props.activeTopMenu" :data="data"></MainMenu>

  <div class="layer-content">
    <slot></slot>
  </div>

  <Footer :data="data"></Footer>
</template>

<style scoped>
.layer-content {
  padding: 0 0;
}

</style>