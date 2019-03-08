var app = angular.module('app', []);

app.controller('EmployeeCRUDCtrl', ['$scope','EmployeeCRUDService', function ($scope, EmployeeCRUDService) {
	
	$scope.getAllEmployees = function () {
        EmployeeCRUDService.getAllEmployees()
          .then(function success(response){
              $scope.employees = response.data._embedded.employees;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message='';
              $scope.errorMessage = 'Error getting employees!';
          });
    }
	
	$scope.getEmployee = function () {
        var id = $scope.employee.id;
        EmployeeCRUDService.getEmployee($scope.employee.id)
          .then(function success(response){
              $scope.employee = response.data;
              $scope.employee.id = id;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message = '';
              if (response.status === 404){
                  $scope.errorMessage = 'Employee not found!';
              }
              else {
                  $scope.errorMessage = "Error getting employee!";
              }
          });
    }
	
	$scope.addEmployee = function () {
        if ($scope.employee != null && $scope.employee.firstName) {
            EmployeeCRUDService.addEmployee($scope.employee.firstName, $scope.employee.lastName, $scope.employee.email)
              .then (function success(response){
                  $scope.message = 'Employee added!';
                  $scope.errorMessage = '';
              },
              function error(response){
                  $scope.errorMessage = 'Error adding employee!';
                  $scope.message = '';
            });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }
	
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