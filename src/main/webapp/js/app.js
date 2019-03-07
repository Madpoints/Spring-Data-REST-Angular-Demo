var app = angular.module('app', []);

app.controller('EmployeeCRUDCtrl', ['$scope','EmployeeCRUDService', function ($scope, EployeeCRUDService) {
	
}]):

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
	
	this.deleteEmployee = function deleteEmployee(employeeId){
        return $http({
          method: 'DELETE',
          url: 'api/employees/' + employeeId
	    });
	}
    
	this.updateEmployee = function updateEmployee(employeeId, firstName, lastName, email){
        return $http({
          method: 'PUT',
          url: 'api/employees/' + employeeId,
          data: {firstName:firstame, lastName:lastName, email:email}
        });
    }
	
} ]);