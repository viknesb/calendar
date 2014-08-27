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
			  for(var i=0;i<6;i++) {
				  week.push(new Date(date.setDate(date.getDate()+1)));
			  }
			  return week;
		  }
	  };
  });
