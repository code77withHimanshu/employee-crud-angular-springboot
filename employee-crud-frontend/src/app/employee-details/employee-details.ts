import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {

  id:number=0;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    console.log("id in update employee:", this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
    })
  }
}
