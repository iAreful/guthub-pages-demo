/** @format */

module.exports = {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
		};
	},
	images: {
		unoptimized: true,
	},
};
