'use strict';

/**
 * @ngdoc function
 * @name calendarApp.service:DateService
 * @description
 * # DateService
 * Date service of the calendarApp to provide user friendly date features
 */
 
angular.module('calendarApp')
	.factory('DateService', function (NumberService) {
		return {
			// Returns first day(Sunday) of a given week
			getFirstDayOfWeek : function(date) {
				var day = date.getDay();
				var firstDate = new Date(date.setDate(date.getDate() - day));
				return firstDate;
			},
			//Returns all days in the current week
			getDaysInWeek : function(date) {
				var week = [];
				var firstDate = this.getFirstDayOfWeek(date);
				week.push(new Date(firstDate));
				for(var i=1;i<7;i++) {
					week.push(new Date(firstDate.setDate(firstDate.getDate()+1)));
				}
				return week;
			},
			// Returns 24 hours in a day
			getTimesInADay : function() {
				var day = [];
				var date = new Date();
				date.setHours(0);
				date.setMilliseconds(0);
				date.setMinutes(0);
				date.setSeconds(0);
				day.push(new Date(date));
				for(var i=1;i<24;i++) {
					day.push(new Date(date.setHours(date.getHours()+1)));
				}
				return day;
			},
			// Returns a random date in a given week
			getRandomDateInWeek : function(date) {
				var daysInWeek = this.getDaysInWeek(date);
				var randomDayIndex = NumberService.getRandomIntInRange(0,6); 
				return daysInWeek[randomDayIndex];
			},
			// Returns just the date in string format(without the time)
			getDateString : function(date) {
				return date.toJSON().substring(0,10);
			}
		};
	});
