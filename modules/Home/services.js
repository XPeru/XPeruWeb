
/* global angular */
/* global console */


var homeService = angular.module('HomeService', []);

	homeService.factory('homeInitialService', ['$rootScope',
		function($rootScope) {
			var service = {};
			
			service.getOrders = function(callback) {
				
				connection.connect();

				connection.query('SELECT * from ORDERS_APP', function(err, rows, fields) {
					if (!err)
						console.log('The solution is: ', rows);
						//callback(rows);
					//else
					//	console.log('Error while performing Query.');
				});

				connection.end();
			};
			return service;
		}
	]);

