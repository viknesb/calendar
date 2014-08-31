'use strict';

describe('Service: AppointmentDisplayService', function () {
	
	// load the service's module
	beforeEach(module('calendarApp'));
	
	var appointmentDisplayService,
	appointmentService;
	
	beforeEach(inject(function(AppointmentDisplayService, AppointmentService) {
		appointmentDisplayService = AppointmentDisplayService;
		appointmentService = AppointmentService;
	}));
	
	it('should have function addAppointmentToDay ', function () {
		expect(angular.isFunction(appointmentDisplayService.addAppointmentToDay)).toBe(true);
	});
	
	it('function addAppointmentToDay ', function () {
		var date = new Date(); 
		var appt = appointmentService.createAppointment(date, date, 'Desc');
		var day = {};
		day.date = date;
		day.layers = [];
		appointmentDisplayService.addAppointmentToDay(day,appt);
		expect(day.layers.length).toBe(1);
		// Appt List
		expect(day.layers[0].length).toBe(1);
		expect(day.layers[0][0]).toBe(appt);
	});
	
	it('should have function addToLayer ', function () {
		expect(angular.isFunction(appointmentDisplayService.addAppointmentToDay)).toBe(true);
	});
	
	it('should have function updateHeightAndYOffset ', function () {
		expect(angular.isFunction(appointmentDisplayService.updateHeightAndYOffset)).toBe(true);
	});
	
	it('function updateHeightAndYOffset ', function () {
		var date = new Date();
		var appt = appointmentService.createAppointment(date, date, 'Desc');
		appointmentDisplayService.updateHeightAndYOffset(appt);
		expect(appt.height).toBeDefined();
		expect(appt.yOffset).toBeDefined();
	});
	
	it('should have function updateWidthAndXOffset ', function () {
		expect(angular.isFunction(appointmentDisplayService.updateWidthAndXOffset)).toBe(true);
	});
	
	it('function updateWidthAndXOffset ', function () {
		var date = new Date();
		var appt = appointmentService.createAppointment(date, date, 'Desc');
		appointmentDisplayService.updateWidthAndXOffset(appt);
		expect(appt.width).toBeDefined();
		expect(appt.xOffset).toBeDefined();
	});
	
	it('should have function calculateDepth ', function () {
		expect(angular.isFunction(appointmentDisplayService.calculateDepth)).toBe(true);
	});
	
	it('function calculateDepth ', function () {
		var date = new Date();
		var appt = appointmentService.createAppointment(date, date, 'Desc');
		appointmentDisplayService.calculateDepth(appt);
		expect(appt.depth).toBeDefined();
	});

});