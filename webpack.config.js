const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const path = require( 'path' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
 
const production = process.env.NODE_ENV === '';
 
module.exports = {
    watch: true,
    mode,
    entry: {
        index: path.resolve( process.cwd(), 'src', 'index.js' ),
        style: path.resolve( process.cwd(), 'src', 'style.scss' ),
        editor: path.resolve( process.cwd(), 'src', 'editor.scss' ),
    },
    output: {
        filename: '[name].js',
        path: path.resolve( process.cwd(), 'build' ),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                editor: {
                    name: 'editor',
                    test: /editor\.(sc|sa|c)ss$/,
                    chunks: 'all',
                    enforce: true,
                },
                style: {
                    name: 'style',
                    test: /style\.(sc|sa|c)ss$/,
                    chunks: 'all',
                    enforce: true,
                },
                default: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sc|sa|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv( {
                                    stage: 3,
                                    features: {
                                        'custom-media-queries': {
                                            preserve: false,
                                        },
                                        'custom-properties': {
                                            preserve: true,
                                        },
                                        'nesting-rules': true,
                                    },
                                } ),
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
        } ),
        new IgnoreEmitPlugin( [ 'editor.js', 'front.js', 'style.js', 'editor.deps.json', 'index.deps.json' ] ),
    ],
};