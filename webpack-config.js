var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname,"build/js");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var config = {
    entry: {
        index: path.resolve(__dirname,'./src/index.js'),
        article: path.resolve(__dirname,'./src/article.js')
    },
    output:{
        path:buildPath,
        publicPath: '/',
        filename:"[name].js"
    },
    resolve:{
        extentions:["","js"]//当requrie的模块找不到时，添加这些后缀
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.(png|jpg)$/,loader: 'url?limit=40000'}
        ]
    },
    plugins: [commonsPlugin]
    /*plugins:[
             new webpack.ProvidePlugin({    //加载jq
                 $: 'jquery'
             }),
             new webpack.optimize.UglifyJsPlugin({    //压缩代码
                 compress: {
                     warnings: false
                 },
                 except: [ '$', 'exports', 'require']    //排除关键字
             })
         ]
    plugins: [
        //压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            //supresses warnings, usually from module minification
            warnings: false
          }
        }),
        //允许错误不打断程序
        new webpack.NoErrorsPlugin(),
        //把指定文件夹xia的文件复制到指定的目录
        new TransferWebpackPlugin([
          {from: 'www'}
        ], path.resolve(__dirname,"src"))
      ] */
}
module.exports = config;

