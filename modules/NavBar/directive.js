/* global angular*/
var m = angular.module('NavBar');

m.directive('xperuNavBar',
	function() {
		return {
			controller: 'NavbarController',
			restrict: 'E',
			templateUrl: 'modules/NavBar/views/nav.html',
			scope: {
				home: '@',
				matriceSem: '@',
				matriceOcJour: '@',
				trmtOc: '@',
				referentiel: '@',
				gestion: '@'
			}
		};
	});