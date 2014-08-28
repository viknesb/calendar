'use strict';

describe('Service: AppointmentService', function () {
	
	// load the service's module
	beforeEach(module('calendarApp'));
	
	var appointmentService;
	
	beforeEach(inject(function(AppointmentService) {
		appointmentService = AppointmentService;
	}));
	
	it('should have function createAppointment ', function () {
		expect(angular.isFunction(appointmentService.createAppointment)).toBe(true);
	});
	
	it('function createAppointment ', function () {
		var appt = appointmentService.createAppointment(new Date(), new Date(), 'Test Desc');
		expect(appt.startDate).toBeDefined();
		expect(appt.endDate).toBeDefined();
		expect(appt.desc).toBeDefined();
		expect(appt.isAllDay).toBeDefined();
	});
});