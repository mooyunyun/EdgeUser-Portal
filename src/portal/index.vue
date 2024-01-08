<script setup>
import Layout from "@/components/Layout.vue";
import TImage from "@/components/TeaUI/TImage.vue";
import TButton from "@/components/TeaUI/TButton.vue";
import cdnArchitectPNG from '@/assets/cdn-architect.png'
</script>

<template>
	<Layout active-top-menu="index">
		<div class="block">
			<div class="inner-block">
				<div class="summary-box">
					<div class="description-box">
						<h1 class="text-4xl font-normal">CDN</h1>
						<p>
							CDN是内容分发网络（Content Delivery
							Network）的简称，可以帮助我们将内容快速地分发到不同的区域和运营商，包括HTML页面、Javascript文件、CSS文件，及音视频文件等。
						</p>
						<p>
							同时，CDN也能保护我们的网站免受攻击，比如常见的CC攻击和SQL注入攻击。
						</p>
						<div class="button-box">
							<a href="/portal/products/cdn"><TButton label="查看CDN产品" icon="pi pi-arrow-right right" icon-pos="right"></TButton></a>
						</div>
					</div>
					<div class="image-box mt-6">
						<TImage :src="cdnArchitectPNG"/>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<style scoped lang="less">
@import "index.less";
</style>