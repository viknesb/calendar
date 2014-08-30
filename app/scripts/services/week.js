'use strict';

/**
 * @ngdoc function
 * @name calendarApp.service:WeekService
 * @description
 * # WeekService
 * Week service of the calendarApp provides methods to add appointments to a week
 */
 
angular.module('calendarApp')
	.factory('WeekService', function (DateService, AppointmentDisplayService) {
		return {
			//Returns an array of day objects that can hold appointments in a week
			getWeek : function(date) {
				var week = {};
				var daysInWeek = DateService.getDaysInWeek(date);
				daysInWeek.forEach(function(item) {
					var day = {};
					day.date = item;
					day.layers = [];
					var dateString = DateService.getDateString(item);
					week[dateString] = day;
				});
				return week;
			},
			addAppointment : function(week,appt) {
				var startDateString = DateService.getDateString(appt.startDate);
				var endDateString = DateService.getDateString(appt.endDate);
				if(startDateString === endDateString) {
					var day = week[startDateString];
					if(day!==undefined) {
						AppointmentDisplayService.addAppointmentToDay(day,appt);
					}
				} else {
					// TODO: Handle case where the appointment stretches on to the next day
				}
				return week;
			}
		};
	});