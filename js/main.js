require.config({
    paths: {
        //库文件
        baseUrl: 'js',
        'jquery': '../libs/jquery.min',
        'angular': '../libs/angular',
        'angular-ui-router': '../libs/angular-ui-router',
        'bootstrap': "../libs/bootstrap"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular'],
            exports: 'angular-ui-router'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
    ,urlArgs: "bust=" + (new Date()).getTime() //会读取缓存，调试用;上传到服务器时,使用此语句,可以使缓存到用户端,加快速度
});

//手动启动ng
define(['router/router'], function() {
    'use strict';
    //使用bootstrap方法启动Angular应用
    angular.bootstrap(document, ["app"]);
});