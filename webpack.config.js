const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: './lib/index.tsx',
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx'] //兼容这些后缀的
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/lib'),
        libraryTarget: "umd" // 兼容 CMD 与 AMD
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "index.html"
        })
    ],
    // externals:{
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React',
    //     },
    //     "react-dom":{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:'ReactDOM',
    //     }
    // }
};
