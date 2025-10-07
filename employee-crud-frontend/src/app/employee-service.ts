import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="https://thorough-vitality-production.up.railway.app/employees";
  constructor(private httpClient:HttpClient){}
  
  getEmployeeList():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number, employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployeeById(id:number):Observable<object>{
    return this.httpClient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
