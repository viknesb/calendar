'use strict';

describe('Service: DateService', function () {
	
	// load the service's module
	beforeEach(module('calendarApp'));
	
	var dateService;
	
	beforeEach(inject(function(DateService) {
		dateService = DateService;
	}));
	
	it('should have function getFirstDayOfWeek ', function () {
		expect(angular.isFunction(dateService.getFirstDayOfWeek)).toBe(true);
	});
	
	it('function getFirstDayOfWeek ', function () {
		var date = new Date('08/27/2014');
		var firstDateInWeek = dateService.getFirstDayOfWeek(date);
		var expectedDate = new Date('08/24/2014');
		expect(firstDateInWeek.getTime()).toBe(expectedDate.getTime());
	});
	it('should have function getDaysInCurrentWeek ', function () {
		expect(angular.isFunction(dateService.getDaysInCurrentWeek)).toBe(true);
	});
	
	it('function getDaysInCurrentWeek ', function () {
		var days = dateService.getDaysInCurrentWeek();
		expect(days.length).toBe(7);
	});
	
	it('should have function getTimesInADay ', function () {
		expect(angular.isFunction(dateService.getTimesInADay)).toBe(true);
	});
	
	it('function getTimesInADay ', function () {
		var times = dateService.getTimesInADay();
		expect(times.length).toBe(24);
		for(var i=0;i<24;i++) {
			expect(times[i].getHours()).toBe(i);
		}
	});
});
