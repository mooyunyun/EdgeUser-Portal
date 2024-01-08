import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import TryFilesPlugin from "./src/utils/plugins.js"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TryFilesPlugin,
		vue()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {},
	root: 'src',
	publicDir: '@/../public',
	build: {
		rollupOptions: {
			input: [
				'@/portal/index.html'
			],
			output: {
				assetFileNames: 'assets/app-[hash].[ext]',
				entryFileNames: 'assets/app-[hash].js',
				chunkFileNames: 'assets/app-[hash].js',
				dir: 'dist'
			}
		},
	}
})
