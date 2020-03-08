module.exports = {
    plugins: [
        // 修复一些和 flex 布局相关的 bug
        require('postcss-flexbugs-fixes'),
        // 参考 browserslist 的浏览器兼容表自动对那些还不支持的现代 CSS 特性做转换
        require('postcss-preset-env')({
            // 自动添加浏览器头
            autoprefixer: {
                // will add prefixes only for final and IE versions of specification
                flexbox: 'no-2009',
            },
            stage: 3,
        }),
        // 根据 browserslist 自动导入需要的 normalize.css 内容
        require('postcss-normalize'),
    ],
};