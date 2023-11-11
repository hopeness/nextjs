/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
		serverActions: {
			// https://github.com/vercel/next.js/issues/58019
			allowedForwardedHosts: ['q11.tplinkdns.com:3000', 'nextjs-blond-psi-43.vercel.app'],
			allowedOrigins: ['q11.tplinkdns.com:3000', 'nextjs-blond-psi-43.vercel.app']
		},
	}
};

module.exports = nextConfig;

