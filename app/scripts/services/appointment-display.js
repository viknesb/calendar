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
				/* Check for overlaps with existing appointments
				* Start with appointments from the bottom most layer. 
				* Subsequent layers will be covered by recursion
				*/
				var apptList = layers[0];
				for(var i=0;i<apptList.length;i++) {
					this.calculateDepth(apptList[i]);
				}
				
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
			},
			updateWidthAndXOffset : function(appt) {
				// Width Calculation
				if(appt.layer+1===appt.depth) {
					// Width of appointment in topmost layer
					appt.width = 100/appt.depth;
				} else {
					// Width of appointments in all other layers
					appt.width = 100/appt.depth*17/10;
				}
				
				// X axis Position Calculation
				appt.xOffset = 100/appt.depth*(appt.layer);
				if(appt.xOffset===0) {
					appt.xOffset=0.5;
				}
			},
			calculateDepth : function(appt) {
				if(appt.children) {
					var maxDepthOfChildren = 0;
					for(var i=0;i<appt.children.length;i++) {
						var childDepth = this.calculateDepth(appt.children[i]);
						if(childDepth > maxDepthOfChildren) {
							maxDepthOfChildren = childDepth;
						}
					}
					appt.depth = maxDepthOfChildren;
				} else {
					appt.depth = appt.layer+1;
				}
				// Update appointment's width and x position here to avoid recursing again 
				this.updateWidthAndXOffset(appt);
				return appt.depth;
			}
		};
	});
