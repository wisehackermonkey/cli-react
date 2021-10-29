const path = require("path");


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["file?name=[name].[ext]"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource'
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json"],
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages: ["json", "javascript", "typescript"],
        }),
    ],
    devServer: { contentBase: "./src" },
};
