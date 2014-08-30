'use strict';


/**
 * @ngdoc function
 * @name calendarApp.service:AppointmentService
 * @description
 * # AppointmentService
 * Appointment service of the calendarApp provides helper methods of appointments
 */
 
angular.module('calendarApp')
	.factory('AppointmentService', function () {
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
			isOverlapping : function(appt1,appt2) {
				// If dates overlap
				if(appt1.startDate<appt2.endDate && appt1.endDate>appt2.startDate) {
					return true;
				}
				return false;
			}
		};
	});
