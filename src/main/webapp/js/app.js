var app = angular.module('app', []);

app.service('EmployeeCRUDService', [ '$http', function($http) {
	 
	this.getUser = function getEmployee(employeeId) {
		
		return $http({
			method: 'GET',
			url: 'api/employees/' + employeeId
		});
	}
    
} ]);