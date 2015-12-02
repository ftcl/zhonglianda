angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope',
		function($scope) {}
	])
	.controller('RegisterCtrl', ['$scope',
		function($scope) {
			$scope.switchType = switchType;
			$scope.controlOb = {
				type:"password"}

			function switchType() {
				if ($scope.controlOb.type == "text") {
					$scope.controlOb.type = "password";
				} else {
					$scope.controlOb.type = "text";
				}
			}
		}
	])
	.controller('AppCtrl', ['$scope', '$ionicHistory',
		function($scope, $ionicHistory) {
			$scope.goBack = goBack;

			function goBack() {
				$ionicHistory.goBack();
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
			};
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
	.controller('PersonalCtrl', ['$scope', 'LoaclStorageServ', '$state',
		function($scope, LoaclStorageServ, $state) {
			$scope.isLogin = false;
			$scope.$on('$ionicView.beforeEnter', function() {
				if (!$scope.isLogin) {
					$scope.isLogin = true;
					$state.go("login");
				}
			})
			$scope.clearData = function() {
				$scope.isLogin = false;
				LoaclStorageServ.clear();
			}
		}
	])