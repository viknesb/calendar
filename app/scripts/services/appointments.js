'use strict';


/**
 * @ngdoc function
 * @name calendarApp.service:AppointmentService
 * @description
 * # AppointmentService
 * Appointment service of the calendarApp provides helper methods of appointments
 */
 
angular.module('calendarApp')
	.factory('AppointmentService', function (DateService) {
		return {
			// Creates and returns an appointment object
			createAppointment : function(startDate, endDate, desc, isAllDay) {
				var appt = {};
				appt.startDate = startDate;
				appt.endDate = endDate;
				appt.desc = desc;
				appt.isAllDay = !!isAllDay;
				return appt;
			},
			updatePosition : function(appt) {
				/* We have 1px border for each hour. 
				 * So offset should also add hours to the minutes from midnight
				 * to get the exact position of the appointment
				 */
				appt.yOffset = DateService.getHoursFromMidnight(appt.startDate) +
					Math.floor(DateService.getMinutesFromMidnight(appt.startDate)/2);
				var duration = DateService.getMinutesDiff(appt.startDate,appt.endDate);
				// TODO: Need to take into account when the appointment stretches on to next day
				appt.height = Math.floor(duration/2);
			}
		};
	});
