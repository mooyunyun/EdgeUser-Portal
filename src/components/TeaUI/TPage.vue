<script setup>
import Paginator from "primevue/paginator";

const props = defineProps({
  total: 0,
  pageSize: 0
})

const emits = defineEmits(['change'])

function changePage(v) {
  v.page ++
  emits("change", v)
}

</script>

<template>
<Paginator :totalRecords="props.total" :rows="props.pageSize" @page="changePage"></Paginator>
</template>