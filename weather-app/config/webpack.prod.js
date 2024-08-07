const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', // Установите режим на 'production'
    entry: './src/index.js', // Точка входа приложения

    output: {
        path: path.resolve(__dirname, 'dist'), // Выходная папка
        filename: '[name].[contenthash].js', // Имя выходного файла с хэшом
        publicPath: '/', // Путь к ресурсам
    },

    module: {
        rules: [
            {
                test: /\.js$/, // Обработка JavaScript файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Обработка CSS файлов
                use: [
                    MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
                    'css-loader',
                    'postcss-loader', // Дополнительная обработка с PostCSS (при необходимости)
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Обработка изображений
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Использование пути и имени файла
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // Обработка шрифтов
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Использование пути и имени файла
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(), // Очищает выходную папку при каждой сборке
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML
            minify: {
                collapseWhitespace: true, // Минификация HTML
                removeComments: true, // Удаление комментариев
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Имя выходного CSS файла
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'), // Определение окружения
        }),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all', // Разделение кода
        },
        minimize: true, // Минификация
    },

    resolve: {
        extensions: ['.js', '.jsx'], // Расширения для автоматического разрешения
    },
};