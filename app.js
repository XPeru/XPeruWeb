
var app = angular.module('xPeru', []);

angular.module('Home', []);
angular.module('NavBar', []);
angular.module('Contact', []);
angular.module('Agenda', []);
angular.module('Anuncios', []);
angular.module('Postular', []);
angular.module('HomeController', []);
angular.module('HomeService', []);

var xPeruApp = angular.module('xPeru', [
	'NavBar',
	'Home',
	'Contact',
	'Agenda',
	'Anuncios',
	'Postular',
	'ngRoute',
	'ui.router', 'HomeController', 'HomeService'
]);

xPeruApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeInitialController',
			templateUrl: 'modules/Home/views/home.html',
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
		})
		.state('contact', {
			url: '/contact',
			controller: 'ContactController',
			templateUrl: 'modules/Contact/views/contact.html',
			hideMenus: true,
			data: {},
			reloadOnSearch: false
		})
		.state('agenda', {
			url: '/agenda',
			controller: 'AgendaController',
			templateUrl: 'modules/Agenda/views/agenda.html',
			hideMenus: true,
			data: {},
			reloadOnSearch: false
		})
		.state('anuncios', {
			url: '/anuncios',
			controller: 'AnunciosController',
			templateUrl: 'modules/Anuncios/views/anuncios.html',
			hideMenus: true,
			data: {},
			reloadOnSearch: false
		})
		.state('postular', {
			url: '/postular',
			controller: 'PostularController',
			templateUrl: 'modules/Postular/views/postular.html',
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