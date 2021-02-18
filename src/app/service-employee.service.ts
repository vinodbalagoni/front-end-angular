import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployeesList(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }
   
  getEmployeeByemailId(emailId: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${emailId}`);
  }

}
