'use strict';

/**
 * @ngdoc overview
 * @name calendarApp
 * @description
 * # calendarApp
 *
 * Main module of the application.
 */
angular
	.module('calendarApp', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/week', {
				templateUrl: 'views/week.html',
				controller: 'WeekCtrl'
			})
			.otherwise({
				redirectTo: '/week'
			});
	});
