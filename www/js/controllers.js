angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$rootScope', '$timeout', '$state', '$stateParams', 'LoaclStorageServ', '$ionicHistory',
		function($scope, $rootScope, $timeout, $state, $stateParams, LoaclStorageServ, $ionicHistory) {
			$scope.codeBtn = {
				text: "获取验证码",
				time: ""
			};
			$scope.login = {
				account: "",
				password: "",
				register: true
			}
			$scope.GetCode = function() {
				if (typeof($scope.codeBtn.time) == "string") {
					$scope.codeBtn.text = "获取中";
					$scope.codeBtn.time = 10;
					calctime();
				}
			};
			$scope.doLogin = function() {
				$rootScope.isLogin = true;
				LoaclStorageServ.set("isLogin", true);
				$state.go("tab." + $stateParams.PageState);
			};

			function calctime() {
				$timeout(function() {
					$scope.codeBtn.time -= 1;
					if ($scope.codeBtn.time == 0) {
						$scope.codeBtn.text = "获取验证码";
						$scope.codeBtn.time = "";
					} else {
						calctime();
					}
				}, 1000);
			}
		}
	])
	.controller('TabsCtrl', ['$scope', '$ionicPopover', '$state',
		function($scope, $ionicPopover, $state) {
			$scope.openPopover = openPopover;

			function openPopover($event) {
				if (!$scope.popover) {
					$ionicPopover.fromTemplateUrl('templates/home/selectPopover.html', {
						scope: $scope
					}).then(function(popover) {
						$scope.popover = popover;
						$scope.popover.show($event);
					});
				} else {
					$scope.popover.show($event);
				}
			}
		}
	])
	.controller('HomeCtrl', ['$scope',
		function($scope) {
			$scope.homeMessage = [{
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "A",
				money: 500000,
				time: 2,
				rate: 18,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "B",
				money: 10000,
				time: 2,
				rate: 20,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "C",
				money: 6000,
				time: 4,
				rate: 18,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "A",
				money: 500000,
				time: 2,
				rate: 1,
			}]
		}
	])
	.controller('InvestCtrl', ['$scope',
		function($scope) {
			$scope.homeMessage = [{
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "A",
				money: 500000,
				time: 2,
				rate: 18,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "B",
				money: 10000,
				time: 2,
				rate: 20,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "C",
				money: 6000,
				time: 4,
				rate: 18,
			}, {
				name: "戴添岳",
				reason: "生意上需要资金",
				address: "广州市天河区",
				type: "A",
				money: 500000,
				time: 2,
				rate: 1,
			}]
		}
	])
	.controller('LoanCtrl', ['$scope',
		function($scope) {}
	])
	.controller('ApplyCtrl', ['$scope',
		function($scope) {}
	])
	.controller('PilelistCtrl', ['$scope',
		function($scope) {
			$scope.pilelist = {
				type: 0,
				location: "未知"
			}
			$scope.barclick = function(index) {
				$scope.pilelist.type = index;
			}
		}
	])
	.controller('PilesearchCtrl', ['$scope',
		function($scope) {
			$scope.goBack = function() {
				$ionicHistory.goBack();
			}
			$scope.searchclick = function(index) {
				$scope.pilelist.type = index;
			}
		}
	])
	.controller('BusinessCtrl', ['$scope',
		function($scope) {}
	])
	.controller('PersonalCtrl', ['$scope', 'LoaclStorageServ','$state',
		function($scope, LoaclStorageServ,$state) {
			$state.go("login");
			$scope.clearData = function() {
				LoaclStorageServ.clear();
			}
		}
	])