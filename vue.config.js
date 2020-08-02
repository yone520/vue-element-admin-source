let path = require('path');
module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: true,
  
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  devServer: {
    disableHostCheck: true//webpack4.0 开启热更新
  },
  publicPath: './',
  // 别名
  chainWebpack: config => {
    config.resolve.alias
          .set('@', path.join(__dirname, 'src'))
          .set('@S', path.join(__dirname, 'src/assets/style'))
          .set('@C', path.join(__dirname, 'src/components'))
  }
  
}
