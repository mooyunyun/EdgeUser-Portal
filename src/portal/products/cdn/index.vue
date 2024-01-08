<script setup>
import Layout from "@/components/Layout.vue";
import TBreadcrumb from "@/components/TeaUI/TBreadcrumb.vue";
import TTag from "@/components/TeaUI/TTag.vue";
import TImage from "@/components/TeaUI/TImage.vue";
import TDivider from "@/components/TeaUI/TDivider.vue";
import TButton from "@/components/TeaUI/TButton.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Menubar from "primevue/menubar";
import ScrollTop from "primevue/scrolltop";
import {ref} from "vue";
import Data from "@/utils/data.js";

import cdnArchitectPNG from '@/assets/cdn-architect.png'
import cdnSceneCCImage from '@/assets/cdn-scene-cc.png'
import cdnSceneHTTPSImage from '@/assets/cdn-scene-https.png'
import cdnSceneHTTP3Image from '@/assets/cdn-scene-http3.png'
import cdnSceneMediaDeliverImage from '@/assets/cdn-scene-media-deliver.png'
import cdnSceneSQLXSSImage from '@/assets/cdn-scene-sql-xss.png'
import cdnSceneStaticDeliverImage from '@/assets/cdn-scene-static-deliver.png'

// data
const data = Data.ref()

// second menu
const newsBoxRef = ref(null)
const plansBoxRef = ref(null)
const advantagesBoxRef = ref(null)
const featuresBoxRef = ref(null)
const scenesBoxRef = ref(null)
const priceBoxRef = ref(null)
const docsBoxRef = ref(null)

const secondMenuItems = [
	{
		label: '最新活动',
		command: goItem,
		ref: newsBoxRef
	},
	/**{
		label: '产品规格',
		command: goItem,
		ref: plansBoxRef
	},**/
	{
		label: '产品优势',
		command: goItem,
		ref: advantagesBoxRef
	},
	{
		label: '产品功能',
		command: goItem,
		ref: featuresBoxRef
	},
	{
		label: '应用场景',
		command: goItem,
		ref: scenesBoxRef
	},
	/**{
		label: '产品计费',
		command: goItem,
		ref: priceBoxRef
	},**/
	{
		label: '文档与工具',
		command: goItem,
		ref: docsBoxRef
	}
]


function goItem(e) {
	e.item.ref.value.scrollIntoView({behavior: 'smooth'})
}

// plans
function planBoxMouseOver(e) {
	if (e.currentTarget.className.indexOf("shadow-4") < 0) {
		e.currentTarget.className += " shadow-4"
	}
}

function planBoxMouseOut(e) {
	e.currentTarget.className = e.currentTarget.className.replace(/shadow-4/, "").trim()
}

// advantages
const advantages = [
	{
		"name": "节约成本",
		"description": "支持内容压缩、WebP转换等帮您节约带宽成本",
		"icon": "pi pi-dollar"
	},
	{
		"name": "就近缓存",
		"description": "根据DNS自动分配最近分发节点",
		"icon": "pi pi-cloud"
	},
	{
		"name": "高缓存命中率",
		"description": "使用二级缓存大幅提升缓存命中率减少回源",
		"icon": "pi pi-chart-line"
	},
	{
		"name": "强大的规则引擎",
		"description": "缓存和WAF均提供强大的规则引擎设置，满足各种需求",
		"icon": "pi pi-align-left"
	},
	{
		"name": "简单易用",
		"description": "5秒盾、CC防护、HTTP/3等功能一键启用",
		"icon": "pi pi-bolt"
	},
	{
		"name": "灵活自由",
		"description": "提供丰富的可定制选项",
		"icon": "pi pi-wrench"
	}
]

// features
const features = [
	{
		"name": "内容分发",
		"description": "简单易用的内容分发系统",
		"icon": "pi pi-cloud"
	},
	{
		"name": "WAF",
		"description": "自带基于规则引擎的WAF，轻松防御SQL注入等攻击",
		"icon": "pi pi-shield"
	},
	{
		"name": "HTTP/3",
		"description": "一键支持基于quic的HTTP/3协议",
		"icon": "pi pi-bolt"
	},
	{
		"name": "5秒盾",
		"description": "快速启用5秒盾防御模式",
		"icon": "pi pi-clock"
	},
	{
		"name": "CC防护",
		"description": "有效防御常见CC攻击",
		"icon": "pi pi-hourglass"
	},
	{
		"name": "URL鉴权",
		"description": "多种鉴权方法有效防盗链",
		"icon": "pi pi-key"
	},
	{
		"name": "页面优化",
		"description": "支持对HTML、CSS、Javascript压缩混淆优化",
		"icon": "pi pi-hashtag"
	},
	{
		"name": "WebP",
		"description": "使用WebP压缩大幅降低带宽费用",
		"icon": "pi pi-image"
	},
	{
		"name": "对象存储",
		"description": "支持多个三方对象存储，如Amazon S3等",
		"icon": "pi pi-database"
	},
	{
		"name": "负载均衡",
		"description": "支持TCP和UDP四层负载均衡",
		"icon": "pi pi-send"
	},
	{
		"name": "边缘计算",
		"description": "使用Javascript轻松部署业务逻辑到边缘节点",
		"icon": "pi pi-code"
	},
	{
		"name": "IPv6",
		"description": "全面支持IPv4和IPv6融合",
		"icon": "pi pi-box"
	}
]

// scenes
const scenes = [
	{
		name: "静态文件加速",
		description: "可以为网站常见的静态文件加速，如HTML、CSS、Javascript、图片文件等。",
		features: [
			{
				name: "缓存命中率高",
				description: "有效减少回源几率，降低源站负载"
			},
			{
				name: "可压缩",
				description: "可以设置gzip、brotli等压缩，降低文件尺寸，有效减少带宽费用"
			},
			{
				name: "支持动态请求",
				description: "可以设置要排除的缓存条件，避免影响动态请求"
			}
		],
		image: cdnSceneStaticDeliverImage
	},
	{
		name: "音视频加速",
		description: "可以为音频文件提供加速服务，如.mp3、.wav、.ts等。",
		features: [
			{
				name: "支持分段加载",
				description: "支持客户端Range请求，并能分段缓存"
			},
			{
				name: "高并发",
				description: "支持并发读取常见的多个ts文件下载"
			}
		],
		image: cdnSceneMediaDeliverImage
	},
	{
		name: "HTTPS安全",
		description: "为网站设置HTTPS后可以有效保护你的网站安全。",
		features: [
			{
				name: "支持多域名",
				description: "支持在单个网站中添加多个域名HTTPS证书"
			},
			{
				name: "安全",
				description: "使用HTTPS可有效保护你的客户同网站的通讯安全"
			},
			{
				name: "支持OCSP",
				description: "通过OCSP让TLS握手更加快速"
			}
		],
		image: cdnSceneHTTPSImage
	},
	{
		name: "HTTP/3支持",
		description: "通过开通HTTP/3服务，可有效降低连接成本。",
		features: [
			{
				name: "性能更高",
				description: "相对于TCP连接，使用UDP性能更高"
			},
			{
				name: "更安全",
				description: "有效避免数据包被篡改"
			},
			{
				name: "低延迟",
				description: "相对于TCP，UDP数据包分发的更快速"
			}
		],
		image: cdnSceneHTTP3Image
	},
	{
		name: "CC防御",
		description: "使用CC防护功能可有效防御常见的CC攻击。",
		features: [
			{
				name: "设置简单",
				description: "一键开启，无需特别复杂的设置"
			},
			{
				name: "可定制化",
				description: "可以根据自己的需要调整相关参数"
			},
			{
				name: "多条件组合",
				description: "在WAF中可以使用多个条件组合来检测CC攻击"
			}
		],
		image: cdnSceneCCImage
	},
	{
		name: "SQL/XSS注入防御",
		description: "可以在WAF中使用SQL和XSS注入检测规则快速防御相关攻击。",
		features: [
			{
				name: "语义化",
				description: "支持在SQL和HTML中的语义化解析，轻松化解注释、混淆等干扰因素"
			},
			{
				name: "高性能",
				description: "检测用时非常短，用户无感知"
			},
			{
				name: "可回溯",
				description: "可以在WAF日志中查看被拦截的请求信息"
			}
		],
		image: cdnSceneSQLXSSImage
	}
]
</script>

<style scoped lang="less">
@import "./index.less";
</style>

<template>
	<Layout active-top-menu="products">
		<div class="block">
			<div class="inner-block">
				<div class="summary-box">
					<div class="description-box">
						<TBreadcrumb :model="[
                {label: '产品'},
                {label: 'CDN'}
            ]"></TBreadcrumb>
						<h1 class="text-4xl font-normal">CDN</h1>
						<p>
							CDN是内容分发网络（Content Delivery
							Network）的简称，可以帮助我们将内容快速地分发到不同的区域和运营商，包括HTML页面、Javascript文件、CSS文件，及音视频文件等。
						</p>
						<p>
							同时，CDN也能保护我们的网站免受攻击，比如常见的CC攻击和SQL注入攻击。
						</p>
					</div>
					<div class="image-box mt-6">
						<TImage :src="cdnArchitectPNG"/>
					</div>

					<Menubar class="second-menubar" :model="secondMenuItems"></Menubar>
				</div>
			</div>
		</div>

		<!-- 最新活动 -->
		<div class="block" v-if="data.latestPosts != null && data.latestPosts.length > 0">
			<div class="inner-block" ref="newsBoxRef">
				<h2 class="text-2xl font-normal">最新活动</h2>
				<div>
					<ul class="list-none news-box flex-wrap flex line-height-4">
						<li v-for="post in data.latestPosts"><a :href="'/portal/post?postId=' + post.id"
																target="_blank">
							<TTag :label="post.category.name" severity="info" class="mr-1"
								  v-if="post.category != null && post.category.id > 0"></TTag>
							{{ post.subject }}</a> <span class="date-span text-sm">{{ post.publishedTime }}</span></li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 产品规格 -->
		<div class="block" v-if="false">
			<div class="inner-block" ref="plansBoxRef">
				<h2 class="text-2xl font-normal">产品规格</h2>
				<div class="plans-box flex-wrap flex line-height-4">
					<div class="plan-box" v-for="i in 5" @mouseover="planBoxMouseOver" @mouseout="planBoxMouseOut">
						<div class="font-normal text-lg"><strong>基础套餐</strong></div>
						<div class="text-gray-600">适用于普通站点适用于普通站点</div>
						<TDivider></TDivider>
						<div>
							下行流量
							<div class="value">{{ 100 * i }}TB</div>
						</div>
						<div>
							网站数
							<div class="value">{{ 10 * i }}</div>
						</div>
						<div>优惠价格
							<div class="value">100元/月</div>
						</div>
						<TDivider></TDivider>
						<div class="mt-2">
							<TButton outlined>立即购买</TButton>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 产品优势 -->
		<div class="block">
			<div class="inner-block" ref="advantagesBoxRef">
				<h2 class="text-2xl font-normal">产品优势</h2>
				<div class="features-box flex flex-wrap text-center grid">
					<div class="feature-box col-4" v-for="feature in advantages">
						<h3 class="font-normal text-primary-600"><i class="mr-2"
																	:class="feature.icon"></i>{{ feature.name }}</h3>
						<p class="text-gray-600">{{ feature.description }}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- 产品功能 -->
		<div class="block">
			<div class="inner-block" ref="featuresBoxRef">
				<h2 class="text-2xl font-normal">产品功能</h2>
				<div class="features-box flex flex-wrap text-center grid">
					<div class="feature-box col-4" v-for="feature in features">
						<h3 class="font-normal text-primary-600"><i class="mr-2"
																	:class="feature.icon"></i>{{ feature.name }}</h3>
						<p class="text-gray-600">{{ feature.description }}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- 应用场景 -->
		<div class="block">
			<div class="inner-block" ref="scenesBoxRef">
				<h2 class="text-2xl font-normal">应用场景</h2>
				<div class="scenes-box">
					<TabView>
						<TabPanel v-for="scene in scenes" :header="scene.name">
							<div class="content-box m-0">
								<div class="description-box">
									<p class="title">{{ scene.name }}</p>
									<p>{{ scene.description }}</p>
									<TDivider></TDivider>
									<p v-for="feature in scene.features">
										<strong><i class="pi pi-check"></i> {{
												feature.name
											}}：</strong>{{ feature.description }}
									</p>
								</div>
								<div class="image-box">
									<TImage :src="scene.image"/>
								</div>
							</div>
						</TabPanel>
					</TabView>
				</div>
			</div>
		</div>

		<!-- 产品计费 -->
		<!--<div class="block">
			<div class="inner-block" ref="priceBoxRef">
				<h2 class="text-2xl font-normal">产品计费</h2>
				<div class="docs-box flex flex-wrap gap-4 line-height-1 link">
					<div class="card">
						<span>产品付费方式</span>
						<p>了解CDN的付费方式</p>
						<i class="pi pi-arrow-right"></i>
					</div>
					<div class="card">
						<span>套餐选购</span>
						<p>了解怎么选购套餐</p>
						<i class="pi pi-arrow-right"></i>
					</div>
					<div class="card">
						<span>流量包选购</span>
						<p>了解怎么选购流量包</p>
						<i class="pi pi-arrow-right"></i>
					</div>
					<div class="card">
						<span>高防服务选购</span>
						<p>了解怎么选购高防服务</p>
						<i class="pi pi-arrow-right"></i>
					</div>
				</div>
			</div>
		</div>-->

		<!-- 文档与工具 -->
		<div class="block">
			<div class="inner-block" ref="docsBoxRef">
				<h2 class="text-2xl font-normal">文档与工具</h2>
				<div class="docs-box flex flex-wrap gap-4 line-height-1 link">
					<a href="/docs" class="card">
						<span>产品文档</span>
						<p>查看CDN使用文档</p>
						<i class="pi pi-arrow-right"></i>
					</a>
					<a href="/docs/cdn/qa.html" class="card">
						<span>常见问题</span>
						<p>快速查看常见问题</p>
						<i class="pi pi-arrow-right"></i>
					</a>
					<a href="/docs" class="card">
						<span>快速入门</span>
						<p>快速了解CDN功能使用</p>
						<i class="pi pi-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>

		<ScrollTop
			icon="pi pi-arrow-up"
			:pt="{
          root: 'bg-primary'
        }"
		/>
	</Layout>

</template>

