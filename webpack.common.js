const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: ['file-loader'],
        include: /\.\/config/ // for e.g, but better to only copy particular JSON files (not all)
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          }
        }
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js')
    }),
    new WebpackPwaManifest({
      name: 'Restaurant Shafira App',
      short_name: 'Shafira App',
      description: 'Apps for Find Detail Restaurant',
      background_color: '#f2d974',
      theme_color: '#534e52',
      crossorigin: 'anonymous', // can be null, use-credentials or anonymous
      display: 'standalone',
      icons: [
        {
          src: path.resolve('./src/public/logo-restaurant-192x192px.png'),
          size: '192x192',
          purpose: 'maskable'
        },
        {
          src: path.resolve('./src/public/logo-restaurant-512x512px.png'),
          size: '512x512',
          purpose: 'maskable'
        }
      ]
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new BundleAnalyzerPlugin()
  ]
}
