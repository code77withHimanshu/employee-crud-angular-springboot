import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.html',
  styleUrls: ['./list-employee.css']
})
export class ListEmployee {
  employees:Employee[] = [];
  constructor(private employeeService:EmployeeService, private router:Router){}
  ngOnInit():void{
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]);
  }
  viewEmployee(id:number){
    this.router.navigate(['employee-details', id]);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
}
