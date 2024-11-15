module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // Enable dark mode via class
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			// Enable group-hover variants for desired utilities
			opacity: ["group-hover"],
			scale: ["group-hover"],
			translate: ["group-hover"],
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		function ({ addUtilities }) {
			const newUtilities = {
				".preserve-3d": {
					"transform-style": "preserve-3d",
				},
				".backface-hidden": {
					"backface-visibility": "hidden",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
