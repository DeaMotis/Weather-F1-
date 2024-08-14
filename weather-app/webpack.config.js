const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // ваш входной файл
    output: {
        filename: 'bundle.js', // имя собранного файла
        path: path.resolve(__dirname, 'dist'), // путь к папке с выходным файлом
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'), // или другие плагины PostCSS
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // путь к вашему шаблону HTML
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // указать папку с файлами
        },
        compress: true,
        port: 9000, // любой свободный порт
        open: true, // автоматически открывать браузер
    },
};