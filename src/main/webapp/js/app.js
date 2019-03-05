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
	
	this.addEmployee = function addEmployee(firstName, lastName, email){
        return $http({
          method: 'POST',
          url: 'api/employees',
          data: {firstName:firstame, lastName:lastName, email:email}
        });
    }
    
} ]);