'use strict';


/**
 * @ngdoc function
 * @name calendarApp.service:DateService
 * @description
 * # DateServce
 * Date service of the calendarApp to provide user friendly date features
 */
 
angular.module('calendarApp')
  .factory('DateService', function () {
	  return {
		  // Returns first day(Sunday) of a given week
		  getFirstDayOfWeek : function(date) {
			  var day = date.getDay();
			  var firstDate = new Date(date.setDate(date.getDate() - day));
			  return firstDate;
		  },
		  //Returns all days in the current week
		  getDaysInCurrentWeek : function() {
			  var week = [];
			  var date = this.getFirstDayOfWeek(new Date());
			  week.push(new Date(date));
			  for(var i=1;i<7;i++) {
				  week.push(new Date(date.setDate(date.getDate()+1)));
			  }
			  return week;
		  },
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
		  }
	  };
  });
