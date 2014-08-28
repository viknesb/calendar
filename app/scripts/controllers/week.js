'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
	.controller('WeekCtrl', function ($scope, DateService) {
		$scope.awesomeThings = [
		    'HTML5 Boilerplate',
		    'AngularJS',
		    'Karma'
		];
		// Get days in current week
		
		$scope.week = DateService.getDaysInWeek(new Date());
		$scope.day = DateService.getTimesInADay();
	});
