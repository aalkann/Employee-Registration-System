package com.example.serverapp.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.serverapp.dto.EmployeeDto;
import com.example.serverapp.entity.Employee;
import com.example.serverapp.repository.EmployeeRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EmployeeDto> getAllEmployees(){
        return employeeRepository.findAll()
            .stream().map(this::convertToDto).collect(Collectors.toList()); 
    }

    public Optional<EmployeeDto> getEmployeeById(Long id){
        return employeeRepository.findById(id).map(this::convertToDto);
    }

    public EmployeeDto saveEmployee(EmployeeDto employeeDto){
        Employee employee = convertToEntity(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return convertToDto(savedEmployee);
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);;
    }

    private Employee convertToEntity(EmployeeDto employeeDto){
        return Employee.builder()
            .id(employeeDto.getId())
            .name(employeeDto.getName())
            .title(employeeDto.getTitle())
            .address(employeeDto.getAddress())
            .salary(employeeDto.getSalary())
            .build();
    }

    private EmployeeDto convertToDto(Employee employee){
        return EmployeeDto.builder()
            .id(employee.getId())
            .name(employee.getName())
            .title(employee.getTitle())
            .address(employee.getAddress())
            .salary(employee.getSalary())
            .build();
    }
}
