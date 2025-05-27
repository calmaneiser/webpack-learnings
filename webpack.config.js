/** Converted from CommonJS `require` to ES6 `import` */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, arg_from_cli) => ({
  /** Server Configuration */
  devServer: {
    static: './dist', // serve files from this folder
    open: true, // auto open browser when server starts
    port: 724, // run server on port 3000 (default 8080)
    hot: true, // enable Hot Module Replacement for faster dev
    historyApiFallback: {
      // Remove .html from URLs
      rewrites: [
        { from: /^\/about$/, to: '/about.html' },
        { from: /^\/$/, to: '/index.html' },
      ],
    },
  },
  mode: arg_from_cli.mode || 'development',

  /** Build Configuration */
  output: {
    //filename: 'main.js', // single output file for all chunks
    filename: '[name].js', // chunk based output file
    path: path.resolve(__dirname, 'dist'),
  },
  entry: {
    home: './src/pages/home/index.js', // chunk - home page
    about: './src/pages/about/about.js', // chunk - about page
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // home page
      chunks: ['home'],
      template: './src/pages/home/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html', // about page
      chunks: ['about'],
      template: './src/pages/about/about.html',
    }),
  ],

  /** Loaders */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
