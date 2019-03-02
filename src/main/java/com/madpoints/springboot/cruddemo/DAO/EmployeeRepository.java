package com.madpoints.springboot.cruddemo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.madpoints.springboot.cruddemo.entity.Employee;

@CrossOrigin
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
