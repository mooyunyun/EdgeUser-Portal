<script setup>
import Layout from "@/components/Layout.vue";
import Data from "@/utils/data.js";

const dataRef = Data.ref()
const post = dataRef.value.post
</script>

<template>
	<Layout>
		<div class="block">
			<div class="inner-block">
				<div v-if="post != null">
					<h1 class="text-3xl font-normal mb-2">{{post.subject}}</h1>
					<div class="text-gray-600">{{post.publishedTime}}</div>
					<div v-html="post.body"></div>
				</div>
				<div v-else>POST NOT FOUND</div>
			</div>
		</div>
	</Layout>
</template>