<script setup>
import TabView from "primevue/tabview";

// support TTabPanel instead of TabPanel
let oldIsTabPanelFunc = TabView.methods.isTabPanel
TabView.methods.isTabPanel = function (child) {
  return oldIsTabPanelFunc(child) || child.type.__name === "TTabPanel";
}
</script>

<template>
  <TabView>
    <slot></slot>
  </TabView>
</template>

