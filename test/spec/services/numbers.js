'use strict';

describe('Service: NumberService', function () {

	// load the service's module
	beforeEach(module('calendarApp'));

	var numberService;

	beforeEach(inject(function(NumberService) {
		numberService = NumberService;
	}));

	it('should have function getRandomIntInRange ', function () {
		expect(angular.isFunction(numberService.getRandomIntInRange)).toBe(true);
	});

	it('function getRandomIntInRange ', function () {
		var num = numberService.getRandomIntInRange(5,10);
		expect(num).toBeGreaterThan(4);
		expect(num).toBeLessThan(11);
	});

});
