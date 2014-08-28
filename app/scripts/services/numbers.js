'use strict';


/**
 * @ngdoc function
 * @name calendarApp.service:NumberService
 * @description
 * # NumberService
 * Number service of the calendarApp is a utility service
 */
 
angular.module('calendarApp')
	.factory('NumberService', function () {
		return {
			//Returns a random integer between min (inclusive) and max (inclusive)
			getRandomIntInRange : function(min,max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		};
	});
