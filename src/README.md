Starting with router example:
~~~html
<div id="app"></div>
<script type="module">
	import App from '@/views/IndexPage.vue'
	import SetupPage from "@/utils/page.js";
	import router from "@/router/main.js";
	SetupPage({
		app: App,
		router: router
	})
</script>
~~~

Starting without router Example:
~~~html
<div id="app"></div>
<script type="module">
	import App from '@/views/IndexPage.vue'
	import SetupPage from "@/utils/page.js";
	SetupPage({
		app: App
	})
</script>
~~~

`vite.config.js` example:
~~~javascript
export default defineConfig({
	plugins: [
		vue()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	root: 'src',
	publicDir: '@/../public',
	build: {
		rollupOptions: {
			input: [
				'@/index.html'
			],
			output: {
				assetFileNames: 'assets/app-[hash].[ext]',
				entryFileNames: 'assets/app-[hash].js',
				chunkFileNames: 'assets/app-[hash].js',
				dir: '../build/www'
			}
		},
	}
})
~~~