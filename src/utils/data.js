import {ref} from "vue";
import configs from "@/configs/configs.js";
import axios from "axios";

const Data = {
	ref () {
		if (window.X_VIEW_DATA == null || typeof window.X_VIEW_DATA !== "object") {
			window.X_VIEW_DATA = {}
		}
		return ref(window.X_VIEW_DATA)
	},
	async get (path, args, callback) {
		if (path.length > 0 && path.charAt(path.length - 1) == "/") {
			path = path.substring(0, path.length - 1)
		}
		let apiURL = configs.hostURL(path)
		if (typeof args === "string") {
			if (args.length > 0) {
				if (args.startsWith("?")) {
					apiURL += args
				} else {
					apiURL += "?" + args
				}
			}
		} else if (args != null && typeof args === "object") {
			let argStrings = []
			for (let k in args) {
				if (args.hasOwnProperty(k)) {
					argStrings.push(k + "=" + window.encodeURIComponent(args[k]))
				}
			}
			if (argStrings.length > 0) {
				apiURL += "?" + argStrings.join("&")
			}
		}

		if (apiURL.indexOf("?") > 0) {
			apiURL += "&X_FROM_FRONT=1"
		} else {
			apiURL += "?X_FROM_FRONT=1"
		}
		await axios.get(apiURL, {
			withCredentials: true
		})
			.then(function (resp) {
				if (resp == null || typeof resp !== "object") {
					return
				}
				if (resp.status != 200) {
					return
				}
				let result = resp.data
				if (result != null && typeof result === "object" && result.data != null && typeof result.data === "object") {
					// redirect
					if (result.data["X_FRONT_REDIRECT"] != null && typeof result.data["X_FRONT_REDIRECT"] === "object" && typeof result.data["X_FRONT_REDIRECT"]["url"] === "string") {
						window.location = result.data["X_FRONT_REDIRECT"].url
						return
					}

					if (typeof callback === "function") {
						callback(result.data)
					}
				}
			})
			.catch(function (e) {

			})
	}
}

export default Data;
