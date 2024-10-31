/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate'); // Utilisation de require

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f218a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dlrq2sqk9",
		NEXT_CLOUDINARY_PRESET: "test_2024",
	},
};

// Utilisation de nextTranslate pour exporter la configuration
module.exports = nextTranslate(nextConfig);
