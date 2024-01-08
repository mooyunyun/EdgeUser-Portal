<script setup>
import Menubar from 'primevue/menubar'
import {ref, watch} from 'vue';
import 'primeicons/primeicons.css'
import configs from "@/configs/configs.js";

const props = defineProps({
	data: null,
	active: String
})

const productName = ref("")
const logoURL = ref("")
const userIsLogged = ref(false)
watch(() => props.data, () => {
	if (props.data != null) {
		productName.value = props.data.productName
		logoURL.value = configs.hostURL(props.data.logoURL)
		userIsLogged.value = props.data.userIsLogged
	}
})

const items = ref([
	{
		label: "网站首页",
		url: configs.url("/"),
		class: (props.active == 'index') ? 'active' : ''
	},
	{
		label: "产品",
		class: (props.active == 'products') ? 'active' : '',
		items: [
			{
				label: "CDN",
				url: configs.url("/products/cdn"),
				class: (window.location.toString().indexOf("cdn") > 0) ? 'active' : ''
			},
			/**{
				label: "DNS",
				url: configs.url("/products/dns"),
				class: (window.location.toString().indexOf("dns") > 0) ? 'active' : ''
			}**/
		]
	},
	/**{
		label: "价格",
		url: configs.url("/price"),
		class: (props.active == 'price') ? 'active' : ''
	},**/
	{
		label: "文档",
		url: "/docs",
		class: (props.active == 'docs') ? 'active' : ''
	}
])
</script>

<template>
	<Menubar text :model="items" breakpoint="500" class="main-menu-bar">
		<template #start>
			<span v-if="logoURL.length == 0" class="font-bold">{{ productName }}</span>
			<a href="/portal" v-else><img :src="logoURL" alt="[LOGO]" class="logo-image"/></a>
		</template>
		<template #end>
			<div class="p-menubar-root-list">
				<div class="p-menuitem">
					<div class="p-menuitem-content">
						<a href="/dashboard" class="p-menuitem-link">
							<span class="p-menuitem-text">控制台</span>
						</a>
					</div>
				</div>
				<div class="p-menuitem login-box">
					<div class="p-menuitem-content">
						<a href="/login" class="p-menuitem-link">
							<span class="p-menuitem-text" v-if="!userIsLogged">登录/注册</span>
							<span class="p-menuitem-text" v-if="userIsLogged">进入</span>
						</a>
					</div>
				</div>
			</div>
		</template>
	</Menubar>
</template>

<style scoped lang="less">
.logo-image {
	height: 1.8rem;
}

.main-menu-bar.p-menubar {
	border-radius: 0;
	background: white;
	border-left: none;
	border-right: none;
}

.p-menubar :deep(.p-menuitem.active) {
	a {
		span {
			color: var(--primary-500);
		}
	}

	.p-submenu-list {
		.p-menuitem.active {
			a {
				span {
					color: var(--primary-500);
				}
			}
		}

		a {
			span {
				color: var(--text-color);
			}
		}
	}
}

.main-menu-bar, .main-menu-bar a, .main-menu-bar span.p-menuitem-text {
	//color: white !important;
}

.p-menuitem.login-box {
	background: var(--primary-color);

	.p-menuitem-text {
		color: white;
	}
}
</style>