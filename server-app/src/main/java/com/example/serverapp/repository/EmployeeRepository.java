package com.example.serverapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.serverapp.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    
}
