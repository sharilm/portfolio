/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/<repository-name>',
    assetPrefix: '/<repository-name>',    
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    }
}

module.exports = nextConfig
