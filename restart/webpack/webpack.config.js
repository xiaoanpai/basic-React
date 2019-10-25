module.exports = {
    context: __dirname + "/app",  //源文件目录
    entry: {
        app: "./index.js"  //在源文件目录下面去找index.js文件作为打包的入口文件
    },
    output: {
        path: __dirname + "/dist",  //生成的文件存放目录
        filename: "[name].bundle.js",  //生成的文件name表示entry下面的app
        sourceMapFilename: 'bundle.map'
    },
    optimization: {
        minimize: false
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react", "es2015"] }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            }
        ]
    }
}