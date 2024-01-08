const T = {
	isDefined: function (props, name) {
		if (typeof props !== "object") {
			console.error("isDefined(props, name): invalid props:", props)
			return false
		}
		if (typeof name !== "string") {
			console.error("isDefined(props, name): invalid name:", name)
			return false
		}
		let result = false
		name.split("|").forEach(function (subName) {
			if (props[subName] !== undefined) {
				result = true
			}
		})
		return result
	},

	commonProps: function () {
		let props = {}
		for (let i = 0; i < arguments.length; i++) {
			let arg = arguments[i]
			if (/^[0-9a-zA-Z-]+$/.test(arg)) {
				props[arg] = null
			}
		}
		return {
			...props,

			// colors
			gray: null,
			gray50: null,
			gray100: null,
			gray200: null,
			gray300: null,
			gray400: null,
			gray500: null,
			gray600: null,
			gray700: null,
			gray800: null,
			gray900: null,

			blue: null,
			blue50: null,
			blue100: null,
			blue200: null,
			blue300: null,
			blue400: null,
			blue500: null,
			blue600: null,
			blue700: null,
			blue800: null,
			blue900: null,

			green: null,
			green50: null,
			green100: null,
			green200: null,
			green300: null,
			green400: null,
			green500: null,
			green600: null,
			green700: null,
			green800: null,
			green900: null,

			yellow: null,
			yellow50: null,
			yellow100: null,
			yellow200: null,
			yellow300: null,
			yellow400: null,
			yellow500: null,
			yellow600: null,
			yellow700: null,
			yellow800: null,
			yellow900: null,

			cyan: null,
			cyan50: null,
			cyan100: null,
			cyan200: null,
			cyan300: null,
			cyan400: null,
			cyan500: null,
			cyan600: null,
			cyan700: null,
			cyan800: null,
			cyan900: null,

			pink: null,
			pink50: null,
			pink100: null,
			pink200: null,
			pink300: null,
			pink400: null,
			pink500: null,
			pink600: null,
			pink700: null,
			pink800: null,
			pink900: null,

			indigo: null,
			indigo50: null,
			indigo100: null,
			indigo200: null,
			indigo300: null,
			indigo400: null,
			indigo500: null,
			indigo600: null,
			indigo700: null,
			indigo800: null,
			indigo900: null,

			teal: null,
			teal50: null,
			teal100: null,
			teal200: null,
			teal300: null,
			teal400: null,
			teal500: null,
			teal600: null,
			teal700: null,
			teal800: null,
			teal900: null,

			orange: null,
			orange50: null,
			orange100: null,
			orange200: null,
			orange300: null,
			orange400: null,
			orange500: null,
			orange600: null,
			orange700: null,
			orange800: null,
			orange900: null,

			bluegray: null,
			bluegray50: null,
			bluegray100: null,
			bluegray200: null,
			bluegray300: null,
			bluegray400: null,
			bluegray500: null,
			bluegray600: null,
			bluegray700: null,
			bluegray800: null,
			bluegray900: null,

			purple: null,
			purple50: null,
			purple100: null,
			purple200: null,
			purple300: null,
			purple400: null,
			purple500: null,
			purple600: null,
			purple700: null,
			purple800: null,
			purple900: null,

			red: null,
			red50: null,
			red100: null,
			red200: null,
			red300: null,
			red400: null,
			red500: null,
			red600: null,
			red700: null,
			red800: null,
			red900: null,

			// primary: null, // sometimes not color
			primary50: null,
			primary100: null,
			primary200: null,
			primary300: null,
			primary400: null,
			primary500: null,
			primary600: null,
			primary700: null,
			primary800: null,
			primary900: null,

			// severity
			error: null,
			fatal: null,

			secondary: null,
			success: null,
			info: null,
			warning: null,
			help: null,
			danger: null,

			basic: null,

			// type
			submit: null,
			reset: null,
			button: null,

			// size
			small: null,
			large: null
		}
	},

	composeStyle: function (props) {
		const style = {}

		const colorMap = {
			gray: "var(--gray-500)",
			gray50: "var(--gray-50)",
			gray100: "var(--gray-100)",
			gray200: "var(--gray-200)",
			gray300: "var(--gray-300)",
			gray400: "var(--gray-400)",
			gray500: "var(--gray-500)",
			gray600: "var(--gray-600)",
			gray700: "var(--gray-700)",
			gray800: "var(--gray-800)",
			gray900: "var(--gray-900)",

			blue: "var(--blue-500)",
			blue50: "var(--blue-50)",
			blue100: "var(--blue-100)",
			blue200: "var(--blue-200)",
			blue300: "var(--blue-300)",
			blue400: "var(--blue-400)",
			blue500: "var(--blue-500)",
			blue600: "var(--blue-600)",
			blue700: "var(--blue-700)",
			blue800: "var(--blue-800)",
			blue900: "var(--blue-900)",

			green: "var(--green-500)",
			green50: "var(--green-50)",
			green100: "var(--green-100)",
			green200: "var(--green-200)",
			green300: "var(--green-300)",
			green400: "var(--green-400)",
			green500: "var(--green-500)",
			green600: "var(--green-600)",
			green700: "var(--green-700)",
			green800: "var(--green-800)",
			green900: "var(--green-900)",

			yellow: "var(--yellow-500)",
			yellow50: "var(--yellow-50)",
			yellow100: "var(--yellow-100)",
			yellow200: "var(--yellow-200)",
			yellow300: "var(--yellow-300)",
			yellow400: "var(--yellow-400)",
			yellow500: "var(--yellow-500)",
			yellow600: "var(--yellow-600)",
			yellow700: "var(--yellow-700)",
			yellow800: "var(--yellow-800)",
			yellow900: "var(--yellow-900)",

			cyan: "var(--cyan-500)",
			cyan50: "var(--cyan-50)",
			cyan100: "var(--cyan-100)",
			cyan200: "var(--cyan-200)",
			cyan300: "var(--cyan-300)",
			cyan400: "var(--cyan-400)",
			cyan500: "var(--cyan-500)",
			cyan600: "var(--cyan-600)",
			cyan700: "var(--cyan-700)",
			cyan800: "var(--cyan-800)",
			cyan900: "var(--cyan-900)",

			pink: "var(--pink-500)",
			pink50: "var(--pink-50)",
			pink100: "var(--pink-100)",
			pink200: "var(--pink-200)",
			pink300: "var(--pink-300)",
			pink400: "var(--pink-400)",
			pink500: "var(--pink-500)",
			pink600: "var(--pink-600)",
			pink700: "var(--pink-700)",
			pink800: "var(--pink-800)",
			pink900: "var(--pink-900)",

			indigo: "var(--indigo-500)",
			indigo50: "var(--indigo-50)",
			indigo100: "var(--indigo-100)",
			indigo200: "var(--indigo-200)",
			indigo300: "var(--indigo-300)",
			indigo400: "var(--indigo-400)",
			indigo500: "var(--indigo-500)",
			indigo600: "var(--indigo-600)",
			indigo700: "var(--indigo-700)",
			indigo800: "var(--indigo-800)",
			indigo900: "var(--indigo-900)",

			teal: "var(--teal-500)",
			teal50: "var(--teal-50)",
			teal100: "var(--teal-100)",
			teal200: "var(--teal-200)",
			teal300: "var(--teal-300)",
			teal400: "var(--teal-400)",
			teal500: "var(--teal-500)",
			teal600: "var(--teal-600)",
			teal700: "var(--teal-700)",
			teal800: "var(--teal-800)",
			teal900: "var(--teal-900)",

			orange: "var(--orange-500)",
			orange50: "var(--orange-50)",
			orange100: "var(--orange-100)",
			orange200: "var(--orange-200)",
			orange300: "var(--orange-300)",
			orange400: "var(--orange-400)",
			orange500: "var(--orange-500)",
			orange600: "var(--orange-600)",
			orange700: "var(--orange-700)",
			orange800: "var(--orange-800)",
			orange900: "var(--orange-900)",

			bluegray: "var(--bluegray-500)",
			bluegray50: "var(--bluegray-50)",
			bluegray100: "var(--bluegray-100)",
			bluegray200: "var(--bluegray-200)",
			bluegray300: "var(--bluegray-300)",
			bluegray400: "var(--bluegray-400)",
			bluegray500: "var(--bluegray-500)",
			bluegray600: "var(--bluegray-600)",
			bluegray700: "var(--bluegray-700)",
			bluegray800: "var(--bluegray-800)",
			bluegray900: "var(--bluegray-900)",

			purple: "var(--purple-500)",
			purple50: "var(--purple-50)",
			purple100: "var(--purple-100)",
			purple200: "var(--purple-200)",
			purple300: "var(--purple-300)",
			purple400: "var(--purple-400)",
			purple500: "var(--purple-500)",
			purple600: "var(--purple-600)",
			purple700: "var(--purple-700)",
			purple800: "var(--purple-800)",
			purple900: "var(--purple-900)",

			red: "var(--red-500)",
			red50: "var(--red-50)",
			red100: "var(--red-100)",
			red200: "var(--red-200)",
			red300: "var(--red-300)",
			red400: "var(--red-400)",
			red500: "var(--red-500)",
			red600: "var(--red-600)",
			red700: "var(--red-700)",
			red800: "var(--red-800)",
			red900: "var(--red-900)",

			primary: "var(--primary-500)",
			primary50: "var(--primary-50)",
			primary100: "var(--primary-100)",
			primary200: "var(--primary-200)",
			primary300: "var(--primary-300)",
			primary400: "var(--primary-400)",
			primary500: "var(--primary-500)",
			primary600: "var(--primary-600)",
			primary700: "var(--primary-700)",
			primary800: "var(--primary-800)",
			primary900: "var(--primary-900)",
		}

		for (let k in props) {
			if (props[k] === undefined) {
				continue
			}
			if (colorMap[k] !== undefined) {
				style.background = colorMap[k]
			}
		}

		return style
	},

	id: 0,
	nextId: function () {
		return (this.id++)
	}
}

export default T;