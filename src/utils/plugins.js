const TryFilesPlugin = {
	name: 'goedge:try-files',
	configureServer(server) {
		server.middlewares.use('/', (req, res, next) => {
			// try [ 'path.html', 'path/index.html']
			let urlPath = req.url
			let argsIndex = urlPath.indexOf("?")
			let args = ""
			if (argsIndex >= 0) {
				args = urlPath.substring(argsIndex) // contains '?'
				urlPath = urlPath.substring(0, argsIndex)
			}
			if (urlPath.length > 0
				&& !urlPath.endsWith("/")
				&& urlPath.indexOf(":") < 0
				&& !urlPath.startsWith("/@vite")) {
				let pieces = urlPath.split("/")
				let lastPiece = pieces[pieces.length - 1]
				if (lastPiece.indexOf(".") < 0) {
					server.transformRequest(urlPath + ".html").catch((e) => {
						if (e.code === "ERR_LOAD_URL") {
							req.url = urlPath + "/"
						}
					})
				}
			}

			next()
		})
	}
}

export default TryFilesPlugin