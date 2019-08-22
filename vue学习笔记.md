# vue 学习笔记
## 0.项目初始化
1. 安装 vue cli  
   cnpm -g install vue-cli
## 1.安装的依赖包

1. stylus
   cnpm install stylus --save
   作用：辅助开发css，帮助开发样式，css中使用一些变量，类似less sass

2. stylus-loader
   cnpm install stylus-loader --save
   作用：辅助开发css，帮助开发样式，css中使用一些变量，类似less sass

3. fastClick
   cnpm install fastclick --save
   作用：修复触摸屏点击事件 延迟300ms

4. vue-awesome-swiper
   cnpm install vue-awesome-swiper@2.6.7 --save
   作用：首页轮播图插件

## 2.学习笔记

1. 移动端布局使用:rem
    1rem = html font-size = 50px

2. style 使用: style 的文件变量后缀 .styl

3. 定义全局css样式变量
   `$bgColor = #00bcd4` ,然后引入 `@import '../../../assets/styles/varibles.styl'` 定义的变量，使用$bgColor\

4. css中引入css 前面加～   `'~styles/varibles.styl'`

5. vue中定义全局 路径别名：
    修改的文件名称：webpack.base.conf.js
    更改：
`resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles':resolve('src/assets/styles'),
    }
  },`

## -1.关于markdown使用总结

设置标题一行结束，后需要空一行
