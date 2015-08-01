/* global angular */
/* global console */

var homeController = angular.module('HomeController', []);


homeController.controller('homeInitialController', ['$scope', '$timeout', 'homeInitialService',

	function($scope, $timeout, homeInitialService) {
		console.info('accesing to home controller');
		
		homeInitialService.getOrders(function(response) {
			$timeout(function() {
				$scope.orders = response;
			}, 200);
		});
		console.info('orders:');
		console.info($scope.orders);
	}
]);