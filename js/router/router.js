//var routerApp = angular.module('routerApp', ['angular-ui-router']);
define([
    "app",
    'angular-ui-router'

], function (app) {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                // .state('index', {
                //     url: '/',
                //     //templateUrl: 'view/index.html'
                //     views: {
                //         '': {
                //             templateUrl: 'index.html'
                //         }
                //         // ,
                //         // 'topbar@index': {
                //         //     templateUrl: 'view/topbar.html'
                //         // },
                //         // 'main@index': {
                //         //     templateUrl: 'view/home.html'
                //         // }
                //     }
                // })
                .state('index', {
                    url: '/index',
                    templateUrl: 'index.html',
                    controller:"indexCon"
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'view/404.html'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'view/home.html',
                    controller: 'homeCon'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'view/about.html',
                    controller: 'aboutCon'
                })
                .state('process', {
                    url: '/process',
                    templateUrl: 'view/process.html'
                    // controller: 'processCon'
                })
                .state('products', {
                    url: '/products',
                    templateUrl: 'view/products.html',
                    controller:'productCon'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'view/contact.html'
                })
        }
    ]);
});