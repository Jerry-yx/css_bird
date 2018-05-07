const webpack = require('webpack');

module.exports ={
	entry: __dirname +'/index.js',//__dirname node.js全局变量 脚本所在目录
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	devtool: 'eval-source-map',//方便调试 cheap-module-eval-source-map大型项目中打包速度快不方便调试
	devServer: {//安装npm install -g webpack-dev-server 搭建本地服务器
		contentBase: __dirname,//服务器加载页面得目录
		historyApiFallback: true,//不跳转
		hot:true,
		inline: true//实时刷新
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use:[{
						loader: "style-loader"//将所有的计算后的样式加入页面中
					},{
						loader: 'css-loader',//能够使用类似@import 和 url(...)的方法
						options: {
							modules: true,
							localIdentName: '[local]'//制定css类名格式 可防止局部css污染全局样式
						}
					},{
						loader:'postcss-loader'//import得css也要用postcss-loader处理？？？
					},{
						loader:'less-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
};