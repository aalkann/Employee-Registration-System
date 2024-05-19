package com.example.serverapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.serverapp.dto.EmployeeDto;
import com.example.serverapp.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<EmployeeDto> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Optional<EmployeeDto> getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @PostMapping
    public EmployeeDto createBook(@RequestBody EmployeeDto employeeDto){
        return employeeService.saveEmployee(employeeDto);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }
}
