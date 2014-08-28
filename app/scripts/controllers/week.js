'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
	.controller('WeekCtrl', function ($scope, DateService, WeekService, AppointmentService) {
		$scope.awesomeThings = [
		    'HTML5 Boilerplate',
		    'AngularJS',
		    'Karma'
		];
		
		// Get days in current week
		$scope.week = WeekService.getWeek(new Date());
		$scope.day = DateService.getTimesInADay();
		
		$scope.createAppointment = function() {
			var appointmentDate = DateService.getRandomDateInWeek(new Date());
			var desc = 'Test appointment';
			var appt = AppointmentService.createAppointment(appointmentDate,appointmentDate,desc);
			WeekService.addAppointment($scope.week,appt);
		};
	});
