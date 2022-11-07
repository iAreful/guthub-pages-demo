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
	basePath: "/guthub-pages-demo",
	assetPrefix: "/guthub-pages-demo",
};
