const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        error: './script/ts/error.tsx',
        index: './script/ts/index.tsx',
        css: './script/src/sass/app.scss'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                // exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader?name=src/[name].[ext]'
            },
            {
                test:/\.(sass|scss|css)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: 'css/[name].css'}
                    },
                    {loader: "extract-loader"},
                    {loader: "css-loader?-url"},
                    // {loader:  "postcss-loader", options: {options: {}}},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: 'file[map]',
        path: path.resolve(__dirname, 'Public')
    }

};