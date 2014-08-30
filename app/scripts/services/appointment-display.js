'use strict';


/**
 * @ngdoc function
 * @name calendarApp.service:AppointmentDisplayService
 * @description
 * # AppointmentDisplayService
 * Appointment Display service of the calendarApp provides helper methods
 * to display appointments
 */
 
angular.module('calendarApp')
	.factory('AppointmentDisplayService', function (DateService, AppointmentService) {
		var layers = [];
		return {
			addAppointmentToDay : function(day,appt) {
				layers = day.layers;
				this.addToLayer(appt,0,null);
				// Update appointment's display attributes
				this.updateDisplayAttr(appt);
			},
			addToLayer : function(appt,layer,parent) {
				if(appt.layer===undefined) {
					appt.layer = 0;
				}
				if(layer>layers.length-1) {
					layers.push([]);
				}
				var apptList = layers[layer];
				
				for(var i=0;i<apptList.length;i++) {
					var appt2 = apptList[i];
					// If it overlaps with an appt in this layer, add it to next layer and stop looking in this layer.
					if(AppointmentService.isOverlapping(appt2,appt)) {
						if(appt2.startDate>appt.startDate) {
							apptList.splice(i,1);
							this.addToLayer(appt2,layer+1,appt);
						} else {
							this.addToLayer(appt,layer+1,appt2);
							return;
						}
					}
				}
				apptList.push(appt);
				if(parent) {
					if(!parent.children) {
						parent.children = [];
					}
					parent.children	.push(appt);
				}
				appt.layer = layer;
			},
			updateDisplayAttr : function(appt) {
				this.updateHeightAndYOffset(appt);				
			},
			updateHeightAndYOffset : function(appt) {
				// Height Calculation
				var duration = DateService.getMinutesDiff(appt.startDate,appt.endDate);
				// TODO: Need to take into account when the appointment stretches on to next day
				appt.height = Math.floor(duration/2);
				
				// Y axis Position Calculation
				/* We have 1px border for each hour. 
				 * So offset should also add hours to the minutes from midnight
				 * to get the exact position of the appointment
				 */
				appt.yOffset = DateService.getHoursFromMidnight(appt.startDate) +
					Math.floor(DateService.getMinutesFromMidnight(appt.startDate)/2);
			}
		};
	});
