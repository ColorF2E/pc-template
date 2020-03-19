const path = require('path');
const cwd = process.cwd();

const resolve = (dir) => {
    return path.join(cwd,dir);
};

// 接口域名
var proxy_url = 'http://erp.ishangzu.com'

// 项目配置代理
module.exports = {
    href: 'test.tianque.com',
    port: 8081,
    proxy: {
        '/isz_base': {
            target: proxy_url,
            changeOrigin: true
        }
    },
    webpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                'http$': resolve('lib/services.js'),
                'config$': resolve('config.js'),
                'views': resolve('src/views'),
                'portal': resolve('src/views/portal'),
                'service': resolve('src/service'),
                'utils$': resolve('src/utils/index.js'),
                'static$': resolve('static')
            }
        }
    },
    eslint: {
        ignore: []
    },

    updateList: [ // 需要更新的文件
        'src/router/index.js',
        'src/service/http.js',
        'src/views/login',
        'src/views/portal',
        'src/App.vue',
        'src/main.js',
        'src/main.scss',
        'static',
        '.gitignore',
        'package.json',
        'tpl.html',
        '.eslintrc.js',
        '.colorc.js', // 升级模板时，将会强制更新本文件
        '!.babelrc', // 前缀为 '!' ，代表将会被删除
    ],
    _meta: { // 请勿删除
        type: 'PC', // 模板类型
        version: '1.0.0', // 模板的版本
    }
}