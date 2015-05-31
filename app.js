var app = angular.module('xPeru', []);
/* global angular */
angular.module('Home', []);
angular.module('NavBar', []);

angular.module('xPeru', [
		'NavBar',
		'Home',
		'ngRoute',
		'ui.router'
	])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'HomeController',
				templateUrl: 'modules/home/views/home.html',
				hideMenus: true,
				data: {},
				reloadOnSearch: false

			})

		.state('nav', {
			url: '/nav',
			controller: 'NavBarController',
			templateUrl: 'modules/NavBar/views/nav.html',
			hideMenus: true,
			data: {},
			reloadOnSearch: false
		});

		$urlRouterProvider.otherwise('home');
	}]);
/*
	.run(['$rootScope', '$location', '$http', '$state', '$stateParams',
		function($rootScope, $location, $http, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]);*/