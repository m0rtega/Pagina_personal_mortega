const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp4)$/i, 
                loader: "url-loader" 
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        )
    ]
}