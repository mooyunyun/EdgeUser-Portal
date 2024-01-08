import '@/assets/base.css'

import {createApp} from 'vue'
import Data from "@/utils/data.js";

//  primevue reference: https://primevue.org/introduction/
import PrimeVue from 'primevue/config'
import Tooltip from "primevue/tooltip";
import BadgeDirective from "primevue/badgedirective";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";

// primeflex reference: https://primeflex.org/installation
import 'primeflex/primeflex.css'

// primevue theme reference: https://primevue.org/theming/
import 'primevue/resources/themes/mdc-light-indigo/theme.css'

/**
 *
 * @param {{ app: Component, router: object, loadData: boolean }} props
 * @constructor
 */
const SetupPage = async function (props) {
	const app = createApp(props.app)

	// load data
	if ((typeof props.loadData === "boolean" && props.loadData) || props.loadData === undefined) {
		await loadData()
	}

	// router
	if (props.router !== null && typeof props.router === "object") {
		app.use(props.router)
	}

	// directives
	app.directive("tooltip", Tooltip)
	app.directive("badge", BadgeDirective)
	app.use(ToastService)
	app.use(ConfirmationService)
	app.use(DialogService)

	app.use(PrimeVue)
	app.mount('#app')
}

async function loadData() {
	window.ACTION_DATA = {}

	var path = window.location.pathname
	if (path.length > 0 && path.charAt(path.length - 1) == "/") {
		path = path.substring(0, path.length - 1)
	}
	await Data.get(path, window.location.search, function (data) {
		window.ACTION_DATA = data
	})
}

export default SetupPage