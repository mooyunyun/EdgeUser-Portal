<script setup>

import TDivider from "@/components/TeaUI/TDivider.vue";
import TMenu from "@/components/TeaUI/TMenu.vue";
import {ref, watch} from "vue";

const year = ref("")
year.value = new Date().getFullYear().toString()

const supportPosts = ref([])
const productName = ref("")
const isLoading = ref(true)

const props = defineProps({
	data: null
})
watch(() => props.data, () => {
	if (props.data != null) {
		const data = props.data
		supportPosts.value = data.supportPosts
		productName.value = data.productName
		isLoading.value = false
	}
})

</script>

<template>
	{{ supportPosts.value }}
	<div class="page-footer" v-if="!isLoading">
		<div class="site-map grid">
			<div class="col">
				<TMenu :model="[
          {
            label: '产品',
            items: [
                {
                  label: 'CDN',
                  url: '/portal/products/cdn'
                },
                /** {
                  label: 'DNS',
                  url: '/portal/products/dns'
                }**/
            ]
          }
      ]"></TMenu>
			</div>
			<div class="col">
				<TMenu :model="[
          {
            label: '价格',
            items: [
                {
                  label: 'CDN套餐',
                  url: '/plans'
                },
                /** {
                  label: 'DNS套餐'
                }**/
            ]
          }
      ]"></TMenu>
			</div>
			<div class="col">
				<TMenu :model="[
          {
            label: '文档',
            items: [
                {
                  label: '文档中心',
                  url: '/docs'
                }
            ]
          }
      ]"></TMenu>
			</div>
			<div class="col">
				<TMenu :model="[
       {
            label: '支持与服务',
            items:supportPosts.map(function (v) {
				return {
					label: v.subject,
					url: '/portal/post?postId=' + v.id
				}
            })
          }
      ]"></TMenu>
			</div>

			<TDivider></TDivider>
			<div class="copyright-box">
				&copy; {{ year }} {{ productName }}
			</div>
		</div>


	</div>
</template>

<style scoped lang="less">
.page-footer {
	//background: var(--gray-200);
	padding: 0 1rem 1rem 1rem;
	margin-top: -1rem;
}

.site-map {
	margin: 0 auto 0 auto;
	width: 1024px;
}

:deep(.p-menu) {
	background: none !important;
	border: none;

	.p-submenu-header {
		background: none !important;
		font-weight: bold;
	}
}

</style>