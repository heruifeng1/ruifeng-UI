const path = require('path');

module.exports = {
    mode:'development',
    entry: './lib/index.tsx',
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
    }
};
