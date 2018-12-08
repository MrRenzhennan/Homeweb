var ParallelUglifyESPlugin =  require( 'webpack-parallel-uglify-es-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var imageminloader  = require('imagemin-webpack');
var imageminGifsicle =  require('imagemin-gifsicle');
const { resolve } = require('path');
const path = require('path');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
var HashOutput = require('webpack-plugin-hash-output');
const ShakePlugin = require('webpack-common-shake').Plugin;
const webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackDevServer = require("webpack-dev-server");
const extractSass = new ExtractTextPlugin({
    //filename: "[name].[contenthash].css",
    filename: "[name].css",
    disable:false
    //disable: process.env.NODE_ENV === "development"
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
};
module.exports = {
    devtool: 'eval-source-map',
 //devtool: "nosources-source-map",
  entry: ['babel-polyfill','whatwg-fetch',__dirname + "/src/index.tsx",__dirname +"/src/css/index.scss"],
  output: {
      //filename: 'bundle.[hash].js',
      filename: 'bundle.js',
      path: paths.dist,
      publicPath: '/',
  },
    devServer: {
        contentBase: paths.src,
        publicPath:'/',
        historyApiFallback: true,
        inline: true,
        hot:true,
        host:"0.0.0.0",
        port: 4546,
        proxy: {
            '/bizs': {
                target: 'http://192.168.10.208:8001/fbs',
                // target: 'http://192.168.10.4:8000/fbs',
                pathRewrite: {'^/bizs' : ''}
            },
            '/bizrest': {
                target: 'http://192.168.10.208:8001/fbs',
                // target: 'http://192.168.10.4:8000/fbs',
            },
        }
    },
  resolve: {
      extensions: ['.js', '.json', '.throwss','.ts', '.tsx'],
      modules: [
          resolve(__dirname, '../node_modules'),
          "node_modules",
      ],
      alias: {
          "react": "preact-compat",
          "react-dom": "preact-compat",
      }
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      {
          test: /\.(ts|tsx|jsx)$/,
          use: ['awesome-typescript-loader'],
      },
      {
          test: /\.(sass|scss)$/,
          use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                },{
                    loader: "sass-loader",
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      }
      ]

  },
  plugins: [
     new webpack.LoaderOptionsPlugin({
        alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
        }}),
     new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 3
      }),
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      //new webpack.optimize.AggressiveMergingPlugin(),
      //new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.SourceMapDevToolPlugin(__dirname + "/public/bundle.js.map"),
      //   new webpack.DefinePlugin({
      //       'process.env': {
      //           'NODE_ENV': JSON.stringify('production')
      //       }
      //   }),
      //new ExtractTextPlugin("bundle.css"),
      new HashOutput(),
      new HtmlWebpackPlugin({
        template: path.join(path.join(__dirname, 'src'), 'index.html'),
      }),
      extractSass,
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, 'dist/*.js')),
        minimize:true
      }),
      // //*
      // new ParallelUglifyESPlugin({
      // uglifyES: {
      //           compress: {
      //
      //               dead_code:true,
      //               passes: 2,
      //           },
      //           mangle:true,
      //           //sourceMap:false
      //           //extractComments:true
      //
      //       },
      //     }),
      //  // */
      new ParallelUglifyESPlugin({    //not console   测试环境关闭，生产环境打开
          uglifyES: {
              compress: {
                  global_defs: {
                      //"@console.log": "alert"
                  },
                  dead_code:true,
                  passes: 2,
                  warnings: false,
                  drop_debugger: true,
                  drop_console: true
              },
              mangle:true,
          },
      }),


      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
              drop_console:false
          }
      }),

        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          minRatio: 0.8
        }),
        new ShakePlugin(),
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            { from: 'src/css/iefix.css', to: 'iefix.css' },
            { from: 'src/ie/iefix.js', to: 'iefix.js' },
            { from: 'src/*.pdf' ,flatten:true },
            { from: 'src/favicon.ico' },
            { from: 'src/book' }
          ]),
  ]
}