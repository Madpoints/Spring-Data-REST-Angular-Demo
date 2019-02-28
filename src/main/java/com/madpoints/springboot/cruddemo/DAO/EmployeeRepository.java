package com.madpoints.springboot.cruddemo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.madpoints.springboot.cruddemo.entity.Employee;

//@RepositoryRestResource(path="members")
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
