angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.city'])
	//run 限于页面执行
	.run(function($ionicPlatform, $state, $rootScope, LoaclStorageServ) {
		$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleLightContent();
			}
			$rootScope.isNavigation = LoaclStorageServ.getBoolean("isNavigation", true); //获取localstroage判断是否为第一次登录，true启动导航页
			$rootScope.isLogin = LoaclStorageServ.getBoolean("isLogin", false); //获取localstroage判断是否登录
			if (true) {
				LoaclStorageServ.set("isNavigation", false); //setlocalstroage判断是否启动导航页
				$state.go('navigation'); //根据路由配置跳转至导航页
			} else {
				$state.go('tab.home'); //根据路由配置跳转至主页
			}
		});
	})
	//config 配置路由及一些平台设置
	.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
		function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
			//$ionicConfigProvider配置Android和iOS界面配置
			$ionicConfigProvider.platform.ios.tabs.style('standard');
			$ionicConfigProvider.platform.ios.tabs.position('bottom');
			$ionicConfigProvider.platform.android.tabs.style('standard');
			$ionicConfigProvider.platform.android.tabs.position('bottom');
			$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
			$ionicConfigProvider.platform.android.navBar.alignTitle('center');
			$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
			$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
			$ionicConfigProvider.platform.ios.views.transition('ios');
			$ionicConfigProvider.platform.android.views.transition('android');
			//配置路由
			$stateProvider
				.state('navigation', {
					url: '/navigation', 
					cache: true, 
					templateUrl: 'templates/navigation/navigation.html' 
				})

			.state('login', { //路由名
				url: '/login/:PageState',//地址
				cache: true,//是否缓存页面
				templateUrl: 'templates/login/login.html',//模板页页面
				controller: 'LoginCtrl' //
			})

			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html'
			})

			.state('tab.home', {
				url: '/home',
				views: {	//tabs中加载页面到指定view
					'tab-home': {//view名
						templateUrl: 'templates/home/tab-home.html',
						controller: 'HomeCtrl'
					}
				}
			})

			.state('pilelist', {
				url: '/pilelist',
				cache: true,
				templateUrl: 'templates/home/pilelist.html',
				controller: 'PilelistCtrl'
			})

			.state('pilesearch', {
				url: '/pilesearch',
				cache: true,
				templateUrl: 'templates/home/pilesearch.html',
				controller: 'PilesearchCtrl'
			})

			.state('tab.business', {
				url: '/business',
				views: {
					'tab-business': {
						templateUrl: 'templates/business/tab-business.html',
						controller: 'BusinessCtrl'
					}
				}
			})

			.state('tab.personal', {
				url: '/personal',
				views: {
					'tab-personal': {
						templateUrl: 'templates/personal/tab-personal.html',
						controller: 'PersonalCtrl'
					}
				}
			})

			//默认路由
			$urlRouterProvider.otherwise('tab/home');

		}
	]);