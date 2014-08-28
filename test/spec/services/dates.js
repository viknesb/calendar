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
	it('should have function getDaysInWeek ', function () {
		expect(angular.isFunction(dateService.getDaysInWeek)).toBe(true);
	});
	
	it('function getDaysInWeek ', function () {
		var days = dateService.getDaysInWeek(new Date());
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
	
	it('should have function getRandomDateInWeek ', function () {
		expect(angular.isFunction(dateService.getRandomDateInWeek)).toBe(true);
	});
	
	it('function getRandomDateInWeek ', function () {
		var currentDate = new Date();
		var days = dateService.getDaysInWeek(currentDate);
		var randomDate = dateService.getRandomDateInWeek(currentDate);
		var isPresent = false;
		days.forEach(function(item) {
			if(item.getTime()===randomDate.getTime()) {
				isPresent = true;
			}
		});
		expect(isPresent).toBe(true);
	});
});
