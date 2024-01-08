const configs = {
	hostURL: (path) => {
		if (window.X_FROM_SERVER === true) {
			return path
		}

		// change host below to your user system host or domain
		return "http://192.168.2.41:7799" + path
	},
	url: (path) => {
		if (path == "") {
			return "/"
		}

		if (path == "/") {
			return "/portal"
		}

		if (path[0] == "/") {
			path = path.substring(1)
		}

		return "/portal/" + path
	}
}

export default configs