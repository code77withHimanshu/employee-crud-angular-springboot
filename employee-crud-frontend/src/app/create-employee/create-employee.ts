import { Component } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css'
})
export class CreateEmployee {

  constructor(private employeeService:EmployeeService, private route:Router){}

  employee:Employee = new Employee();

  onSubmit(){
    this.insertEmployee();
    console.log(this.employee);
  }

  insertEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    });
  }

 goToEmployeeList(){
      this.route.navigate(['/employees']);
    }

}
