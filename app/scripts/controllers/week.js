'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
	.controller('WeekCtrl', function ($scope, DateService, WeekService, AppointmentService, NumberService) {
		$scope.awesomeThings = [
		    'HTML5 Boilerplate',
		    'AngularJS',
		    'Karma'
		];
		
		// Get days in current week
		$scope.week = WeekService.getWeek(new Date());
		$scope.day = DateService.getTimesInADay();
		
		$scope.createAppointment = function() {
			var apptStartDate = DateService.getRandomDateInWeek(new Date());
	    	var duration = NumberService.getRandomIntInRange(30,120);
	    	var apptEndDate = new Date(apptStartDate);
	    	apptEndDate.setMinutes(apptEndDate.getMinutes()+duration);
	    	var desc = 'Test Description';
	    	var appt = AppointmentService.createAppointment(apptStartDate,apptEndDate,desc);
			WeekService.addAppointment($scope.week,appt);
		};
	});
