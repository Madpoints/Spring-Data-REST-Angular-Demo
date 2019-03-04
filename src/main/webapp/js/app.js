var app = angular.module('app', []);

app.service('EmployeeCRUDService', [ '$http', function($http) {
	
	this.getAllEmployees = function getAllEmployees(){
        return $http({
          method: 'GET',
          url: 'api/employees'
        });
    }
	 
	this.getEmployee = function getEmployee(employeeId) {
		
		return $http({
			method: 'GET',
			url: 'api/employees/' + employeeId
		});
	}
    
} ]);