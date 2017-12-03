// 根据参照文件生存index.js
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', //打包的入口
    module: { //loaders的配置
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [
                        {loader: "vue-style-loader"},
                        {loader: "css-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                use:[
                    {loader : "file-loader"}
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': './components'
        },
        extensions: ['.vue', '.js', '.json'] //自动补全文件的后缀
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html', // 参照文件
            filename: 'index.html' // 生存的index.html
        })
    ]
}