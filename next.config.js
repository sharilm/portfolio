/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio/', 
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    }
}

module.exports = nextConfig
