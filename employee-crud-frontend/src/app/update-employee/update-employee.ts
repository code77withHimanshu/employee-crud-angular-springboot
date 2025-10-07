import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee {
  id:number=0;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    console.log("id in update employee:", this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
    })
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.employee=data;
      this.goToEmployeeList();
    })
  }
   goToEmployeeList(){
      this.router.navigate(['/employees']);
    }
}
