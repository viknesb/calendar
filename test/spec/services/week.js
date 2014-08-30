'use strict';

describe('Service: WeekService', function () {
	
	// load the service's module
	beforeEach(module('calendarApp'));
	
	var weekService,
	appointmentService,
	dateService;
	
	beforeEach(inject(function(WeekService, AppointmentService, DateService) {
		weekService = WeekService;
		appointmentService = AppointmentService;
		dateService = DateService;
	}));
	
	it('should have function getWeek ', function () {
		expect(angular.isFunction(weekService.getWeek)).toBe(true);
	});
	
	it('function getWeek ', function () {
		var days = weekService.getWeek(new Date());
		expect(Object.keys(days).length).toBe(7);
	});
	
	it('should have function addAppointment ', function () {
		expect(angular.isFunction(weekService.addAppointment)).toBe(true);
	});
	
	it('function addAppointment ', function () {
		var date = new Date(); 
		var week = weekService.getWeek(date);
		var appt = appointmentService.createAppointment(date, date, 'Desc');
		var dateString = dateService.getDateString(date); 
		expect(week[dateString].layers.length).toBe(0);
		weekService.addAppointment(week,appt);
		expect(week[dateString].layers.length).toBe(1);
		var createdApptList = week[dateString].layers[0]; 
		expect(createdApptList.length).toBe(1);
		var createdAppt = createdApptList[0];
		expect(createdAppt.desc).toBe('Desc');
		expect(createdAppt.startDate.getTime()).toBe(appt.startDate.getTime());
		expect(createdAppt.endDate.getTime()).toBe(appt.endDate.getTime());
		expect(createdAppt.isAllDay).toBe(false);
	});
	
});
