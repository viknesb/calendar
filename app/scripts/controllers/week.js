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
		
		$scope.startDate = new Date();
		
		// Get days in current week
		$scope.week = WeekService.getWeek(new Date());
		$scope.day = DateService.getTimesInADay();
		
		$scope.createAppointment = function() {
			try {
				$scope.startDate = new Date($scope.startDate);
				var apptEndDate = new Date($scope.startDate);
				apptEndDate.setMinutes(apptEndDate.getMinutes()+$scope.duration);
		    	var appt = AppointmentService.createAppointment($scope.startDate,apptEndDate,$scope.desc);
				WeekService.addAppointment($scope.week,appt);
			} catch(err) {
				$scope.msg = err;
			}
	    	
		};
	});
