const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js',
        clean: true
    },
    stats: { 
        children: true 
    },
    module: {
        rules : [
            {
                test: /\.(ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['svg-url-loader']
            },
            {
                test: /\.(jpeg|jpg|ico|txt)$/,
                use: ['file-loader']
            },
            {
                test: /\.png$/,
                use: ['url-loader']
            }
        ]
    },
    resolve : {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
    plugins : [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
        open: true,
        hot: true,
        allowedHosts: "all",
        host: "localhost",
        port: 3000,
      },

}